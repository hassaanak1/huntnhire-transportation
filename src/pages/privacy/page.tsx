import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

const LAST_UPDATED = "April 27, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  usePageMeta({
    title: "Privacy Policy | HuntnHire Luxury Transportation",
    description:
      "Read the HuntnHire Privacy Policy to understand how we collect, use, and protect your personal information when you use our luxury transportation services.",
    keywords:
      "HuntnHire privacy policy, data protection, personal information, luxury limo service privacy",
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 p-6 bg-card border border-border">
              HuntnHire ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website at{" "}
              <span className="text-foreground font-medium">huntnhire.co</span>{" "}
              or use our luxury transportation services. Please read this policy
              carefully. If you disagree with its terms, please discontinue use
              of the site.
            </p>

            <Section title="1. Information We Collect">
              <p>
                We collect information you voluntarily provide when you submit a
                contact inquiry or booking request through our website. This
                includes:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <span className="text-foreground font-medium">
                    Full name
                  </span>{" "}
                  — to address you properly and confirm your booking
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Email address
                  </span>{" "}
                  — to send booking confirmations and respond to inquiries
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Phone number
                  </span>{" "}
                  (optional for contact form, required for bookings) — to
                  coordinate your reservation
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Trip details
                  </span>{" "}
                  — including pickup address, destination, event type, vehicle
                  preference, date, and time — to fulfill your transportation
                  request
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Message content
                  </span>{" "}
                  — any additional details or questions you share in the message
                  field
                </li>
              </ul>
              <p>
                We do not collect payment card numbers or financial information
                through this website. All payment processing, if applicable, is
                handled separately and securely through authorized payment
                processors.
              </p>
              <p>
                We do not knowingly collect data from children under 13 years of
                age. If we learn that we have collected personal information from
                a child under 13, we will delete that information as quickly as
                possible.
              </p>
            </Section>

            <Section title="2. How We Use Your Information">
              <p>
                We use the information you provide solely for legitimate
                business purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Processing and confirming your transportation booking</li>
                <li>
                  Responding to your inquiries, questions, and support requests
                </li>
                <li>
                  Communicating trip details, driver information, and scheduling
                  updates
                </li>
                <li>
                  Sending booking confirmation and follow-up communications
                  related to your service
                </li>
                <li>
                  Improving our website and service offerings based on aggregate
                  usage patterns
                </li>
                <li>
                  Complying with applicable laws, regulations, and legal
                  obligations
                </li>
              </ul>
              <p>
                We will not use your contact information to send unsolicited
                marketing emails unless you have explicitly opted in to receive
                promotional communications from us.
              </p>
            </Section>

            <Section title="3. How We Share Your Information">
              <p>
                We do not sell, trade, rent, or otherwise transfer your personal
                information to third parties for their own marketing purposes.
                We may share your information only in the following limited
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <span className="text-foreground font-medium">
                    Email delivery provider:
                  </span>{" "}
                  We use Mailtrap (mailtrap.io) to transmit emails generated by
                  your form submissions. Mailtrap processes your message data
                  solely to deliver email communications on our behalf.
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Affiliated chauffeurs and dispatch:
                  </span>{" "}
                  Trip details necessary to complete your booking (such as
                  pickup/drop-off location, time, and contact number) may be
                  shared with the chauffeur or dispatch team assigned to your
                  reservation.
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Legal requirements:
                  </span>{" "}
                  We may disclose your information if required to do so by law
                  or in response to valid legal process (e.g., a subpoena, court
                  order, or government request).
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Business transfers:
                  </span>{" "}
                  In the event of a merger, acquisition, or sale of all or part
                  of our business, your information may be transferred as part
                  of that transaction. We will notify you of any such change
                  through a prominent notice on our website.
                </li>
              </ul>
            </Section>

            <Section title="4. Cookies and Tracking Technologies">
              <p>
                Our website is a single-page application (React/Vite) and does
                not set advertising or behavioral tracking cookies. We may use
                minimal session or technical cookies strictly necessary for the
                website to function correctly (e.g., preserving form state).
              </p>
              <p>
                If we integrate third-party analytics services (such as Google
                Analytics) in the future, we will update this policy and provide
                appropriate opt-out mechanisms. At present, no third-party
                analytics tracking is active on this website.
              </p>
            </Section>

            <Section title="5. Data Retention">
              <p>
                We retain the personal information you submit through our
                contact and booking forms only for as long as necessary to
                fulfill the purpose for which it was collected — typically the
                duration of your service engagement and any reasonable follow-up
                period.
              </p>
              <p>
                Email records containing your submission data are retained in
                our email inbox. We periodically review and delete records that
                are no longer needed for operational or legal purposes. If you
                would like your data removed sooner, see the "Your Rights"
                section below.
              </p>
            </Section>

            <Section title="6. Data Security">
              <p>
                We implement reasonable technical and organizational measures to
                protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  HTTPS encryption for all data transmitted between your browser
                  and our website
                </li>
                <li>
                  Server-side handling of all API credentials — no sensitive
                  tokens are exposed in the browser
                </li>
                <li>
                  Access to email communications limited to authorized personnel
                  only
                </li>
              </ul>
              <p>
                While we strive to protect your personal information, no method
                of transmission over the Internet or method of electronic
                storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>
                Depending on your location and applicable law, you may have
                certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <span className="text-foreground font-medium">Access:</span>{" "}
                  Request a copy of the personal information we hold about you
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Correction:
                  </span>{" "}
                  Request that we correct inaccurate or incomplete information
                </li>
                <li>
                  <span className="text-foreground font-medium">Deletion:</span>{" "}
                  Request that we delete your personal information, subject to
                  applicable legal obligations
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    Opt-out of communications:
                  </span>{" "}
                  Request that we stop sending you non-transactional
                  communications
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:admin@huntnhire.co"
                  className="text-primary hover:underline"
                >
                  admin@huntnhire.co
                </a>
                . We will respond to your request within 30 days.
              </p>
            </Section>

            <Section title="8. California Privacy Rights (CCPA)">
              <p>
                If you are a California resident, you have specific rights under
                the California Consumer Privacy Act (CCPA), including the right
                to know what personal information we collect, the right to
                request deletion, and the right to opt out of the sale of
                personal information. We do not sell personal information. To
                submit a CCPA request, please contact us using the information
                in the "Contact Us" section below.
              </p>
            </Section>

            <Section title="9. Third-Party Links">
              <p>
                Our website may contain links to third-party websites (e.g.,
                map services, social media platforms). We are not responsible
                for the privacy practices of those sites. We encourage you to
                review their privacy policies before submitting any personal
                information to them.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We reserve the right to update or modify this Privacy Policy at
                any time. When we make material changes, we will update the
                "Last updated" date at the top of this page. Your continued use
                of our website after any changes constitutes your acceptance of
                the updated policy. We encourage you to review this policy
                periodically.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-5 bg-card border border-border space-y-2">
                <p className="text-foreground font-semibold font-serif text-base">
                  HuntnHire
                </p>
                <p>2019 Allen St, Dallas, TX 75204, United States</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:admin@huntnhire.co"
                    className="text-primary hover:underline"
                  >
                    admin@huntnhire.co
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+19783964667"
                    className="text-primary hover:underline"
                  >
                    (978) 396-4667
                  </a>
                </p>
              </div>
              <p className="mt-4">
                For general inquiries or to book a ride, visit our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact page
                </Link>
                .
              </p>
            </Section>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
