import { FileText } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and conditions governing use of the Newark Food Factory website, chat widget, and messaging services.",
  path: "/terms",
  keywords: [
    "Newark Food Factory terms",
    "terms and conditions",
    "website terms of use",
    "SMS terms",
  ],
});

const LAST_UPDATED = "April 20, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        icon={FileText}
        title="Terms and Conditions"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=90"
        imageAlt="Document and agreement"
      />

      <section className="py-20 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-3xl mx-auto prose-policy">
          <p className="text-gray-600 leading-relaxed">
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access
            to and use of the website located at{" "}
            <Link href="/" className="text-primary hover:underline">
              https://newarkfoodfactory.com
            </Link>{" "}
            (the &ldquo;Website&rdquo;) and any messaging services offered
            through the chat widget operated by{" "}
            <strong>Newark Food Factory LLC</strong> (&ldquo;Newark Food
            Factory,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;). By accessing the Website or opting in to our
            messaging services, you agree to be bound by these Terms.
          </p>

          <Section title="1. About Us">
            <p>
              Newark Food Factory LLC is a food innovation hub based in Newark,
              New Jersey, providing commercial kitchen access, daily meals,
              catering, events, and programs for food entrepreneurs.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>
              You agree to use the Website only for lawful purposes and in a
              manner that does not infringe the rights of, or restrict or
              inhibit the use and enjoyment of, the Website by any third party.
              You may not attempt to gain unauthorized access to any portion of
              the Website, other accounts, computer systems, or networks
              connected to the Website.
            </p>
          </Section>

          <Section title="3. Chat Widget and Messaging Program">
            <p>
              Our Website features a chat widget that allows you to communicate
              with Newark Food Factory and, where you provide a mobile number,
              to receive text (SMS) messages from us. When you initiate
              communication through the chat widget, you may be presented with
              separate, independent checkboxes authorizing two distinct
              categories of messages:
            </p>
            <h3 className="font-semibold text-gray-900 mt-6 mb-2">
              a. Customer Care Messages (Transactional)
            </h3>
            <p>
              With your explicit consent, we may send you customer care
              messages, including but not limited to: responses to support
              requests, ticket status updates, appointment scheduling and
              coordination, order or reservation confirmations, and follow-up
              communications related to an existing inquiry or interaction.
            </p>
            <h3 className="font-semibold text-gray-900 mt-6 mb-2">
              b. Promotional Messages (Marketing)
            </h3>
            <p>
              With your separate explicit consent, we may send you promotional
              messages, including but not limited to: special offers, discounts,
              event announcements, service updates, and marketing
              communications.
            </p>
            <p className="mt-4">
              <strong>
                Each category of messages requires its own separate, explicit
                opt-in.
              </strong>{" "}
              Consent to receive customer care messages is not combined with,
              and does not imply consent to receive, promotional messages, and
              vice versa. Declining one category will not prevent you from
              opting in to the other.
            </p>
          </Section>

          <Section title="4. Message Frequency, Rates, and Opt-Out">
            <p>
              Message frequency varies based on your interactions and the
              categories of messages to which you have consented. Message and
              data rates from your mobile carrier may apply. Neither Newark Food
              Factory nor your mobile carrier is responsible for delayed or
              undelivered messages.
            </p>
            <p className="mt-4">
              You may opt out of either category of messages at any time by
              replying <strong>STOP</strong> to any message in that category.
              You may reply <strong>HELP</strong> for assistance. Opting out of
              one category will not automatically opt you out of the other; to
              unsubscribe from both, you must reply STOP to a message in each
              category or contact us directly.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All content on the Website, including text, graphics, logos,
              images, and software, is the property of Newark Food Factory LLC
              or its licensors and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, modify, or
              create derivative works from any portion of the Website without
              our prior written consent.
            </p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>
              The Website and all content, services, and messages provided
              through it are offered on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis, without warranties of any kind, either
              express or implied. We do not warrant that the Website will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Newark Food Factory LLC,
              its affiliates, officers, employees, and agents shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              Website or messaging services.
            </p>
          </Section>

          <Section title="8. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of New Jersey, without regard to its conflict of
              law principles. Any dispute arising under these Terms shall be
              resolved exclusively in the state or federal courts located in
              Essex County, New Jersey.
            </p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date at the top of this page indicates when the
              Terms were most recently revised. Continued use of the Website
              after any changes constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have questions about these Terms, please contact us:
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
