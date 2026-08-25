import { Link } from "react-router-dom";
import MaterialIcon from "../components/MaterialIcon.jsx";
import { platform } from "../data.js";

// Privacy Policy and Terms of Service — real pages behind the footer links.
// Plain language, matching what the platform actually does with data.

function LegalShell({ title, updated, children }) {
  return (
    <div className="mx-auto max-w-[820px] px-margin-mobile py-stack-lg md:px-margin-desktop">
      <nav className="mb-stack-md flex items-center gap-2 text-caption text-outline">
        <Link to="/" className="hover:text-primary">Home</Link>
        <MaterialIcon name="chevron_right" className="text-[14px]" />
        <span className="text-on-surface">{title}</span>
      </nav>
      <h1 className="mb-1 text-headline-lg text-primary md:text-headline-xl">{title}</h1>
      <p className="mb-stack-lg text-caption text-on-surface-variant">
        {platform.brand} · Last updated {updated}
      </p>
      <div className="space-y-stack-md rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg">
        {children}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="mb-1 text-headline-md text-primary">{title}</h2>
      <div className="space-y-2 text-body-md leading-relaxed text-on-surface-variant">{children}</div>
    </section>
  );
}

export function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="August 2026">
      <Section title="Who we are">
        <p>
          This learning platform is operated by Skykapital Europe as part of a professional
          ESG training programme. Access is set up by your training administrator; the platform
          is not open to the public.
        </p>
      </Section>
      <Section title="What we collect">
        <p>We collect only what the training requires:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Your name and work email address (provided by your training administrator).</li>
          <li>Your training progress: modules completed, quiz scores and completion dates.</li>
          <li>Documents you sign electronically (read-and-agree acknowledgements), with your name and the date.</li>
          <li>Sign-in history (date and time of each connection).</li>
        </ul>
      </Section>
      <Section title="Why we collect it">
        <p>
          These records form your official training evidence: they demonstrate — to your employer,
          to project lenders and to auditors — that the training was genuinely completed. They are
          also the basis of your certificate, which carries a unique verifiable number.
        </p>
      </Section>
      <Section title="Where it is stored and who can see it">
        <p>
          Data is stored in a secured, access-controlled database. You can see your own record on
          the “My progress” page. The training administrator can see the progress records and
          sign-in history of enrolled learners for reporting and certification purposes. Your data
          is never sold, and never shared beyond the training and certification purpose described here.
        </p>
      </Section>
      <Section title="How long we keep it">
        <p>
          Training records are kept for the duration of the training programme and as long as the
          certification needs to remain verifiable, unless a shorter period is agreed with your organisation.
        </p>
      </Section>
      <Section title="Your rights">
        <p>
          You may ask to access, correct or delete your personal data, within the limits of the
          training-evidence obligations that apply to your project. Contact your training
          administrator, or Skykapital Europe at{" "}
          <a href="mailto:rudy.choufani@skykapital.com" className="text-secondary hover:underline">
            rudy.choufani@skykapital.com
          </a>.
        </p>
      </Section>
    </LegalShell>
  );
}

export function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="August 2026">
      <Section title="1. The service">
        <p>
          This platform delivers professional ESG training — lessons, readings, practice
          exercises, assessments and certificates — to learners enrolled by their training
          administrator under an agreement with Skykapital Europe.
        </p>
      </Section>
      <Section title="2. Your account">
        <p>
          Your account is personal. Keep your password confidential, do not share your access,
          and do not complete assessments on behalf of someone else — the value of the
          certificate depends on it. You can change your password at any time from the account menu.
        </p>
      </Section>
      <Section title="3. Training records and certificates">
        <p>
          Module completions, assessment scores, signed declarations and sign-in history are
          recorded as training evidence. Certificates are issued upon completion of all modules
          and carry a unique number that can be verified with Skykapital Europe. Records are
          designed to be tamper-resistant and cannot be deleted by learners.
        </p>
      </Section>
      <Section title="4. Acceptable use">
        <p>
          Do not attempt to bypass assessments, share assessment content outside the programme,
          probe the platform's security, or use it for any purpose other than your training.
        </p>
      </Section>
      <Section title="5. Content">
        <p>
          Course content is provided by Skykapital Europe for your training only. Normative
          requirements referenced in the course (IFC Performance Standards, Equator Principles,
          EHS Guidelines, national legislation) belong to their issuing institutions — in any
          discrepancy, the primary text governs.
        </p>
      </Section>
      <Section title="6. Availability and liability">
        <p>
          We work to keep the platform available and your data safe, but the service is provided
          “as is”: temporary interruptions can occur, and the platform is a training tool — it is
          not legal advice, and completing it does not by itself constitute regulatory compliance.
        </p>
      </Section>
      <Section title="7. Contact">
        <p>
          Questions about these terms:{" "}
          <a href="mailto:rudy.choufani@skykapital.com" className="text-secondary hover:underline">
            rudy.choufani@skykapital.com
          </a>.
        </p>
      </Section>
    </LegalShell>
  );
}
