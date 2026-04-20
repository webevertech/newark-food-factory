import { Shield } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Newark Food Factory collects, uses, and protects personal information from website visitors and chat widget users.",
  path: "/privacy",
  keywords: [
    "Newark Food Factory privacy policy",
    "privacy policy",
    "SMS privacy",
    "data protection",
  ],
});

const LAST_UPDATED = "April 20, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        icon={Shield}
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=90"
        imageAlt="Privacy and data protection"
      />

      <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            <strong>Newark Food Factory LLC</strong> (&ldquo;Newark Food
            Factory,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
            explains what information we collect when you visit{" "}
            <Link href="/" className="text-primary hover:underline">
              https://newarkfoodfactory.com
            </Link>{" "}
            (the &ldquo;Website&rdquo;) or interact with our chat widget, how we
            use that information, how we handle consent for different types of
            messages, and the rights you have with respect to your data.
          </p>

          <Section title="1. Information We Collect">
            <p>
              We collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Information you provide directly</strong>, such as your
                name, email address, mobile phone number, and the content of
                messages you send through the chat widget or our contact forms.
              </li>
              <li>
                <strong>Consent preferences</strong>, including which categories
                of messages (customer care and/or promotional) you have
                explicitly opted in to receive.
              </li>
              <li>
                <strong>Technical information</strong> collected automatically,
                such as IP address, browser type, device type, referring
                website, and pages visited, used to operate and secure the
                Website.
              </li>
            </ul>
          </Section>

          <Section title="2. Chat Widget Messaging and Consent">
            <p>
              Our chat widget allows you to communicate with Newark Food Factory
              and, if you provide a mobile number, to receive text messages from
              us. We send two distinct categories of messages, and{" "}
              <strong>each requires its own separate, explicit consent</strong>{" "}
              collected through independent checkboxes at the time you interact
              with the chat widget:
            </p>

            <h3 className="font-semibold text-gray-900 mt-6 mb-2">
              a. Customer Care Messages
            </h3>
            <p>
              These are transactional communications related to your existing
              inquiry or interaction with us. Examples include responses to
              support requests, ticket status updates, appointment scheduling
              and coordination, and follow-up messages.
            </p>

            <h3 className="font-semibold text-gray-900 mt-6 mb-2">
              b. Promotional Messages
            </h3>
            <p>
              These are marketing communications, such as special offers,
              discounts, event promotions, and service announcements.
            </p>

            <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-5">
              <p className="text-gray-800">
                <strong>Separate consent, never combined.</strong> Consent to
                receive customer care messages is collected independently from
                consent to receive promotional messages. Opting in to one does
                not opt you in to the other. You may consent to one, both, or
                neither, and you may withdraw either consent at any time.
              </p>
              <p className="text-gray-800 mt-3">
                <strong>No third-party sharing of consent data.</strong> We do
                not sell, rent, or share your mobile number, message content,
                or consent preferences with third parties for their own
                marketing purposes. Neither your customer care consent nor your
                promotional consent is shared with third parties.
              </p>
            </div>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Respond to your inquiries and provide customer support
                (requires your customer care opt-in for SMS delivery).
              </li>
              <li>
                Send promotional messages you have explicitly requested
                (requires your separate promotional opt-in).
              </li>
              <li>Coordinate appointments, bookings, and event logistics.</li>
              <li>
                Operate, maintain, and improve the Website and our services.
              </li>
              <li>
                Comply with legal obligations and protect the rights, property,
                or safety of Newark Food Factory, our users, or others.
              </li>
            </ul>
          </Section>

          <Section title="4. How We Share Information">
            <p>
              We do not sell your personal information. We may share limited
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Service providers</strong> who process information on
                our behalf (for example, the chat widget and SMS delivery
                platforms we use to operate the messaging service). These
                providers are bound by confidentiality obligations and are
                permitted to use the information only to provide services to
                us.
              </li>
              <li>
                <strong>Legal requirements</strong>, when required by law,
                subpoena, or other legal process, or to protect rights, safety,
                or property.
              </li>
            </ul>
            <p className="mt-4">
              Mobile opt-in data and consent preferences are{" "}
              <strong>never</strong> shared with third parties for marketing
              purposes.
            </p>
          </Section>

          <Section title="5. Opt-Out and Your Choices">
            <p>
              You may withdraw consent for either message category at any time:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Reply <strong>STOP</strong> to any message to opt out of that
                message category. Because each category is independent, opting
                out of promotional messages does not cancel customer care
                messages, and vice versa.
              </li>
              <li>
                Reply <strong>HELP</strong> for assistance.
              </li>
              <li>
                Contact us directly at{" "}
                <a
                  href="mailto:info@newarkfoodfactory.com"
                  className="text-primary hover:underline"
                >
                  info@newarkfoodfactory.com
                </a>{" "}
                to request removal from both categories or to update your
                preferences.
              </li>
            </ul>
          </Section>

          <Section title="6. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Withdraw consent to receive messages.</li>
              <li>Lodge a complaint with a data protection authority.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us using the information in the
              &ldquo;Contact Us&rdquo; section below.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain personal information only as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, including
              to comply with legal, accounting, or reporting obligations, and
              to maintain records of consent for as long as required by
              applicable law.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We implement reasonable technical and organizational measures
              designed to protect personal information against unauthorized
              access, disclosure, alteration, or destruction. However, no
              method of transmission over the internet or electronic storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The Website and chat widget are not intended for children under
              13, and we do not knowingly collect personal information from
              children under 13. If you believe a child has provided us with
              personal information, please contact us and we will delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;Last updated&rdquo; date at the top of this page indicates
              when the policy was most recently revised. We encourage you to
              review this page periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <ul className="mt-4 space-y-1">
              <li>
                <strong>Newark Food Factory LLC</strong>
              </li>
              <li>Newark, NJ</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@newarkfoodfactory.com"
                  className="text-primary hover:underline"
                >
                  info@newarkfoodfactory.com
                </a>
              </li>
              <li>
                Website:{" "}
                <Link href="/" className="text-primary hover:underline">
                  https://newarkfoodfactory.com
                </Link>
              </li>
            </ul>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
