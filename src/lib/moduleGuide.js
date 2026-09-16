// ============================================================================
// MODULE STUDY GUIDE — a downloadable PDF recap of one module: the idea in
// short, every section's takeaways, the jargon in plain words, and how the
// quiz works. Generated on the client with jspdf; branded per client.
// ============================================================================
import { jsPDF } from "jspdf";
import { client } from "../config/clients.js";
import { glossaryFor } from "../config/glossary.js";

const NAVY = "#0d1c32";
const GOLD = "#b28c1e";
const GREY = "#5f6672";
const MARGIN = 18;
const WIDTH = 210 - MARGIN * 2;

export function downloadModuleGuidePdf(module, quiz) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = 0;

  const ensure = (needed) => {
    if (y + needed > 280) {
      doc.addPage();
      y = 20;
    }
  };
  const text = (str, size, color, style = "normal", extraGap = 1.5) => {
    doc.setFont("helvetica", style).setFontSize(size).setTextColor(color);
    const lines = doc.splitTextToSize(str, WIDTH);
    ensure(lines.length * size * 0.42 + extraGap);
    doc.text(lines, MARGIN, y);
    y += lines.length * size * 0.42 + extraGap;
  };
  const heading = (str) => {
    ensure(14);
    y += 4;
    doc.setDrawColor(GOLD).setLineWidth(0.8);
    doc.line(MARGIN, y - 3.5, MARGIN + 6, y - 3.5);
    text(str.toUpperCase(), 10.5, NAVY, "bold", 2.5);
  };

  // Header band
  doc.setFillColor(NAVY);
  doc.rect(0, 0, 210, 30, "F");
  doc.setFont("helvetica", "bold").setFontSize(9).setTextColor("#e9c349");
  doc.text(`${client.clientShort} · ${client.courseTitle.toUpperCase()}`, MARGIN, 12);
  doc.setFontSize(15).setTextColor("#ffffff");
  doc.text(doc.splitTextToSize(`${module.code} · ${module.title}`, WIDTH), MARGIN, 19);
  doc.setFont("helvetica", "normal").setFontSize(8.5).setTextColor("#b9c2d0");
  doc.text("Study guide — keep it next to you for the quiz.", MARGIN, 26.5);
  y = 40;

  // In short
  if (module.tldr || module.summary) {
    heading("This module in short");
    text(module.tldr || module.summary, 10, "#222222");
  }

  // Section takeaways
  heading("Section by section — what to remember");
  (module.lesson ?? []).forEach((s, i) => {
    ensure(12);
    text(`${i + 1}. ${s.heading}`, 10, NAVY, "bold", 1);
    const takeaways =
      s.points?.slice(0, 3) ??
      (s.body ? [s.body.split(/(?<=\.)\s+/).slice(0, 2).join(" ")] : []);
    takeaways.forEach((t) => text(`•  ${t}`, 9, "#333333", "normal", 1));
    if (s.example) text(`On site: ${s.example}`, 9, GREY, "italic", 1);
    y += 1.5;
  });

  // Key terms
  const glossary = glossaryFor(module);
  if (glossary.length > 0) {
    heading("Key terms in plain words");
    glossary.forEach((g) => text(`${g.term} — ${g.plain}`, 9, "#333333", "normal", 1.2));
  }

  // The quiz
  heading("The quiz");
  const bank = quiz?.questions ?? [];
  const served = quiz?.serveMix
    ? Object.values(quiz.serveMix).reduce((a, b) => a + b, 0)
    : bank.length && bank.every((q) => q.fmt)
    ? 12
    : bank.length;
  const pass = Math.ceil(served * 0.7);
  [
    `${served} questions, drawn fresh from a larger bank each attempt. ${pass} correct answers pass.`,
    "Every answer is in the sections above — no outside knowledge is needed.",
    "Two 50/50 jokers per attempt each remove one wrong answer.",
    "If you don't pass, the results screen lists exactly which sections your mistakes came from. Reread those, then retake — as many times as you need.",
  ].forEach((t) => text(`•  ${t}`, 9.5, "#333333", "normal", 1.2));

  // Footer on each page
  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal").setFontSize(7.5).setTextColor(GREY);
    doc.text(
      `${client.center} · ${module.code} study guide · page ${i}/${pages}`,
      105,
      292,
      { align: "center" }
    );
  }

  doc.save(`${module.code}-study-guide.pdf`);
}
