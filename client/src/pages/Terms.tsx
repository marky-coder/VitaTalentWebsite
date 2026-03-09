// client/src/pages/Terms.tsx
import React, { useEffect, useState } from "react";
import DecorativeSidebars from "@/components/DecorativeSidebars";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";

export default function Terms() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");

  const handleHireTalent = () => {
    setDialogType("hire");
    setDialogOpen(true);
  };
  const handleJoinAsCandidate = () => {
    setDialogType("candidate");
    setDialogOpen(true);
  };

  useEffect(() => {
    // ensure smooth scroll behavior consistent with App
    try {
      document.documentElement.style.scrollBehavior = "smooth";
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="min-h-screen">
      <DecorativeSidebars onHireTalent={handleHireTalent} onJoinAsCandidate={handleJoinAsCandidate} />

      <main className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            {/* Logo centered at the top */}
            <img
              src={logoImage}
              alt="Vita Talent Logo"
              className="mx-auto w-28 h-28 object-contain mb-4"
            />

            <h1 className="text-4xl font-bold text-foreground mb-4">VITA TALENT – TERMS &amp; CONDITIONS</h1>
            <p className="text-lg font-medium text-muted-foreground">Where Integrity Meets Opportunity</p>
          </header>

          <article className="prose max-w-none text-foreground leading-relaxed">
            <p>
              These Terms &amp; Conditions govern all recruitment and staffing services provided by Vita Talent to any client. By accessing,
              engaging, executing a service agreement, or submitting payment for Vita Talent’s services, the Client expressly agrees to be bound
              by these Terms in full.
            </p>

            <h3>1. Definitions</h3>
            <p>For clarity in these Terms:</p>
            <ul>
              <li><strong>Candidate:</strong> Any individual introduced by Vita Talent to the Client for potential employment or engagement.</li>
              <li><strong>Subscription:</strong> An active, paid monthly service agreement for ongoing recruitment services.</li>
              <li><strong>Buyout:</strong> A case-by-case conversion of a Candidate to direct employment or engagement by the Client.</li>
              <li><strong>Service Failure:</strong> Circumstances where Vita Talent fails to deliver Candidates reasonably aligned with the Client’s written role expectations.</li>
            </ul>

            <h3>2. Company Overview</h3>
            <p>
              Vita Talent is a recruitment and talent solutions agency providing subscription-based hiring services for remote and hybrid roles
              across multiple industries. Vita Talent operates as an independent contractor and does not act as an employer of record unless expressly stated in writing.
            </p>

            <h3>3. Scope of Services</h3>
            <p>
              Vita Talent provides ongoing recruitment and staffing services on a monthly subscription basis. Services may include, but are not limited to:
            </p>
            <ul>
              <li>Role intake and qualification</li>
              <li>Talent sourcing and outreach</li>
              <li>Candidate screening and interviews</li>
              <li>Presentation of qualified candidates</li>
              <li>Ongoing recruitment support during the subscription term</li>
            </ul>
            <p><strong>Important:</strong> Vita Talent does not guarantee any specific hire, employment outcome, or candidate performance.</p>

            <h3>4. Ongoing Recruitment &amp; Candidate Requests</h3>
            <p>
              All services are delivered continuously during an active and paid subscription. If the Client is dissatisfied with a Candidate at any
              time for any reason, the Client may request a new Candidate. Vita Talent will continue recruitment efforts accordingly, provided the
              Client’s account remains active and in good standing.
            </p>
            <p>There are no fixed replacement guarantees, limits, or time-bound replacement obligations.</p>

            <h3>5. Client Responsibilities</h3>
            <p>The Client agrees to:</p>
            <ul>
              <li>Provide accurate and complete role requirements in writing;</li>
              <li>Respond to candidate submissions in a timely manner;</li>
              <li>Provide constructive and actionable feedback;</li>
              <li>Comply with all applicable employment laws and regulations; and</li>
              <li>Train Candidates on the Client’s internal processes, tools, workflows, and specific procedures, ensuring that Candidates understand the Client’s expectations and systems.</li>
            </ul>
            <p>
              All Candidates provided by Vita Talent already possess the relevant experience and skills for the role; however, it is the Client’s responsibility
              to ensure they are properly onboarded and trained for the Client’s specific processes. Delays, omissions, or inaccuracies caused by the Client,
              including failure to train or onboard Candidates, may impact delivery timelines and do not constitute failure on the part of Vita Talent. The
              Client is solely responsible for all legal obligations related to hiring, onboarding, background checks, visa/work authorization, employment
              compliance, and training.
            </p>

            <h3>6. Refund Policy – Failure to Deliver</h3>
            <p>
              All fees paid under this Agreement are non-refundable except in cases where Vita Talent materially fails to deliver Candidates reasonably aligned
              with the Client’s written role expectations.
            </p>
            <p>Refunds may be considered only if all of the following conditions are met:</p>
            <ol>
              <li>Clear role requirements were provided in writing by the Client.</li>
              <li>Timely and actionable feedback was supplied to Vita Talent.</li>
              <li>Vita Talent was given a reasonable opportunity to cure any deficiencies; and</li>
              <li>Vita Talent determines, at its sole discretion, that service delivery has failed.</li>
            </ol>
            <p>
              Any approved refund shall be limited to the most recent monthly fee paid and shall constitute the Client’s sole and exclusive remedy.
            </p>

            <h3>7. Candidate Buyout Option</h3>
            <p>
              If the Client elects to discontinue the subscription but wishes to directly hire, contract, or retain a Candidate introduced by Vita Talent,
              the Client may request a Candidate Buyout.
            </p>
            <p>Buyout eligibility and pricing are:</p>
            <ul>
              <li>Determined solely by Vita Talent</li>
              <li>Assessed on a case-by-case basis</li>
              <li>Dependent on role seniority, compensation level, and engagement duration</li>
            </ul>
            <p>
              Until a buyout is approved in writing and paid in full, the Client may not directly engage the Candidate.
            </p>

            <h3>8. Non-Circumvention</h3>
            <p>
              The Client agrees not to directly or indirectly hire, contract, solicit, or engage any Candidate introduced by Vita Talent outside of an active
              subscription or approved buyout for twelve (12) months following the most recent introduction.
            </p>
            <p>
              Violation of this clause shall result in liquidated damages equal to the applicable buyout fee or twelve (12) months of subscription fees,
              whichever is greater. Vita Talent may recover all costs, including legal fees and collection expenses, associated with enforcing this provision.
            </p>

            <h3>9. Confidentiality &amp; Data Protection</h3>
            <p>
              Both parties agree to maintain strict confidentiality of all non-public information, including candidate data, compensation details, and
              proprietary business information.
            </p>
            <ul>
              <li>Candidate data shall only be used for recruitment purposes related to this subscription.</li>
              <li>Neither party shall use confidential information outside the scope of this agreement.</li>
              <li>Parties shall comply with applicable privacy and data protection laws (including GDPR if applicable).</li>
            </ul>

            <h3>10. Independent Contractor Relationship</h3>
            <p>
              Vita Talent operates as an independent contractor. Candidates are not employees or agents of Vita Talent. All employment obligations, benefits,
              payroll, and compliance responsibilities rest solely with the Client.
            </p>

            <h3>11. Proprietary Rights</h3>
            <p>
              All candidate sourcing methods, databases, recruitment tools, and proprietary processes developed by Vita Talent remain the exclusive property
              of Vita Talent. The Client shall not reproduce, share, or use such methods outside the scope of the subscription.
            </p>

            <h3>12. Force Majeure</h3>
            <p>
              Vita Talent shall not be liable for delays, failures, or disruptions caused by circumstances beyond its reasonable control, including but not
              limited to natural disasters, pandemics, government actions, labor disputes, or technological failures.
            </p>

            <h3>13. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted under U.S. law, Vita Talent shall not be liable for indirect, incidental, special, or consequential damages,
              including lost profits, business interruptions, or reputational harm.
            </p>
            <p>The total liability of Vita Talent shall not exceed the fees paid by the Client during the three (3) months preceding the claim.</p>

            <h3>14. Governing Law &amp; Dispute Resolution</h3>
            <p>
              These Terms shall be governed by the laws of the United States and the State of Delaware. Any dispute shall first be resolved through good-faith
              negotiation. If unresolved, disputes shall be settled by binding arbitration.
            </p>

            <h3>15. Amendments &amp; Severability</h3>
            <p>
              Vita Talent reserves the right to update or modify these Terms at any time. If any provision is held unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3>16. Subscription Plans &amp; Pricing</h3>
            <p>
              Vita Talent offers standard one time subscription plan: the Starter Plan at USD $2,000 fees are billed in advance unless otherwise stated in writing through a proposal, order form, or invoice.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">Confidential &amp; Proprietary – Vita Talent<br/>Where Integrity Meets Opportunity</p>
          </article>
        </div>
      </main>

      <Footer />

      <InquiryDialog open={dialogOpen} onOpenChange={setDialogOpen} type={dialogType} />
    </div>
  );
}
