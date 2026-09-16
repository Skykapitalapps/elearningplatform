// ============================================================================
// PROGRESS WORKBOOK — a formatted Excel export of everyone's progression:
//   Sheet 1 "Overview"   one row per learner (the lender-report view)
//   Sheet 2 "By module"  learner × module matrix — where exactly everyone is
// Built with exceljs (loaded on demand); branded header, frozen panes,
// filters, and colour-coded cells so it reads at a glance.
// ============================================================================
import { client } from "../config/clients.js";
import { moduleAssigned } from "../config/jobRoles.js";

const NAVY = "FF0F2137";
const GOLD = "FFE9C349";
const GREEN_BG = "FFDCFCE7";
const GREEN_TX = "FF166534";
const AMBER_BG = "FFFEF3C7";
const AMBER_TX = "FF92400E";
const GREY_BG = "FFF1F3F6";
const GREY_TX = "FF9AA1AB";
const ZEBRA = "FFF7F9FB";

const thin = { style: "thin", color: { argb: "FFE2E5EA" } };
const BORDER = { top: thin, left: thin, bottom: thin, right: thin };

function headerRow(ws, cells) {
  const row = ws.addRow(cells);
  row.eachCell((c) => {
    c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: NAVY } };
    c.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 10 };
    c.alignment = { vertical: "middle" };
    c.border = BORDER;
  });
  row.height = 20;
  return row;
}

function titleBand(ws, span, subtitle) {
  ws.mergeCells(1, 1, 1, span);
  const t = ws.getCell(1, 1);
  t.value = `${client.clientShort} · ${client.courseTitle}`;
  t.fill = { type: "pattern", pattern: "solid", fgColor: { argb: NAVY } };
  t.font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
  t.alignment = { vertical: "middle" };
  ws.getRow(1).height = 30;
  ws.mergeCells(2, 1, 2, span);
  const st = ws.getCell(2, 1);
  st.value = subtitle;
  st.font = { size: 10, color: { argb: "FF5F6672" }, italic: true };
  ws.getRow(2).height = 18;
  ws.addRow([]);
}

export async function downloadProgressWorkbook({ project, per, rows, members, modules }) {
  const ExcelJS = (await import("exceljs")).default;
  const wb = new ExcelJS.Workbook();
  wb.creator = "Skykapital ESG Learning Center";
  const today = new Date().toISOString().slice(0, 10);

  /* ---------------- Sheet 1 · Overview ---------------- */
  const ov = wb.addWorksheet("Overview");
  titleBand(ov, 10, `Progress report · project: ${project.name} · exported ${today}`);
  headerRow(ov, ["Learner", "Job role", "Modules done", "Total", "Progress %", "Quiz points", "Certified", "Certificate no.", "Last activity", "Sign-ins"]);
  const headerAt = 4;
  per.forEach((p, i) => {
    const row = ov.addRow([
      p.full_name || "—",
      p.job_role || "no role — sees all 18",
      p.done,
      p.totalMods,
      Math.round((p.done / p.totalMods) * 100) / 100,
      p.pts,
      p.certified ? "Yes" : "No",
      p.certified ? p.certNo : "",
      p.last,
      p.signIns,
    ]);
    row.eachCell((c) => {
      c.border = BORDER;
      if (i % 2 === 1) c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: ZEBRA } };
    });
    row.getCell(5).numFmt = "0%";
    const cert = row.getCell(7);
    cert.font = p.certified ? { bold: true, color: { argb: GREEN_TX } } : { color: { argb: GREY_TX } };
    if (p.certified) cert.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN_BG } };
  });
  ov.columns = [{ width: 28 }, { width: 24 }, { width: 13 }, { width: 8 }, { width: 11 }, { width: 11 }, { width: 10 }, { width: 20 }, { width: 13 }, { width: 9 }];
  ov.views = [{ state: "frozen", ySplit: headerAt }];
  ov.autoFilter = { from: { row: headerAt, column: 1 }, to: { row: headerAt + per.length, column: 10 } };

  /* ---------------- Sheet 2 · By module ---------------- */
  const bm = wb.addWorksheet("By module");
  titleBand(bm, modules.length + 1, "Learner × module — green: passed (score shown) · amber: in progress · grey: not in this person's pathway");
  headerRow(bm, ["Learner", ...modules.map((m) => m.code)]);
  const byUser = {};
  for (const r of rows ?? []) (byUser[r.user_id] = byUser[r.user_id] ?? {})[r.module_id] = r;
  members.forEach((m, i) => {
    const cells = [m.full_name || "—"];
    const row = bm.addRow(cells.concat(modules.map(() => "")));
    row.getCell(1).border = BORDER;
    if (i % 2 === 1) row.getCell(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: ZEBRA } };
    modules.forEach((mod, j) => {
      const c = row.getCell(j + 2);
      c.border = BORDER;
      c.alignment = { horizontal: "center" };
      const assigned = moduleAssigned(mod, { job_role: m.job_role });
      const r = byUser[m.id]?.[mod.id];
      if (!assigned) {
        c.value = "—";
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREY_BG } };
        c.font = { color: { argb: GREY_TX } };
      } else if (r?.status === "completed") {
        c.value = r.earned != null && r.total != null ? `${r.earned}/${r.total}` : "done";
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: GREEN_BG } };
        c.font = { bold: true, color: { argb: GREEN_TX } };
      } else if (r?.status === "in_progress") {
        c.value = "…";
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: AMBER_BG } };
        c.font = { bold: true, color: { argb: AMBER_TX } };
      } else if (i % 2 === 1) {
        c.fill = { type: "pattern", pattern: "solid", fgColor: { argb: ZEBRA } };
      }
    });
  });
  bm.columns = [{ width: 28 }, ...modules.map(() => ({ width: 7.5 }))];
  bm.views = [{ state: "frozen", xSplit: 1, ySplit: 4 }];

  /* ---------------- save ---------------- */
  const buf = await wb.xlsx.writeBuffer();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([buf], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }));
  a.download = `${project.name.replace(/[^\w-]+/g, "_")}-progress-${today}.xlsx`;
  a.click();
  URL.revokeObjectURL(a.href);
}
