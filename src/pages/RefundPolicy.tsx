import { motion } from 'framer-motion';
import { RefreshCw, Mail, Phone } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    title: 'Eligibility for Refund',
    content: [
      'IRONPEAK Fitness Studio understands that circumstances may change. Refunds may be considered under the following conditions:',
      '• Medical Grounds: If you are unable to continue your membership due to a medical condition supported by a valid medical certificate, you may be eligible for a prorated refund for the unused portion of your membership.\n• Relocation: If you have relocated more than 25 kilometers from the gym location, you may request a refund for the remaining membership period with valid proof of relocation (e.g., updated address proof, transfer letter).',
      'Refund eligibility is evaluated on a case-by-case basis. IRONPEAK reserves the right to request additional documentation to verify the eligibility criteria.',
    ],
  },
  {
    title: 'Non-Refundable Items',
    content: [
      'The following are considered non-refundable under all circumstances:',
      '• Joining fee or registration fee paid during promotional offers or discounted membership plans\n• Services that have already been availed or consumed, including personal training sessions, group classes, and facility usage\n• Merchandise or supplements purchased at the gym\n• Freeze fees or administrative charges',
      'Members are encouraged to review membership plans thoroughly before purchase to understand what is included and any applicable refund limitations.',
    ],
  },
  {
    title: 'Refund Process',
    content: [
      'To request a refund, follow these steps:',
      '1. Submit a written refund request via email to info@ironpeak.in or in person at the gym reception.\n2. Include your membership ID, reason for refund, and any supporting documents (medical certificate, relocation proof, etc.).\n3. Allow 7-10 business days for your request to be reviewed and processed.\n4. If approved, the refund will be credited to the original payment method within 7-10 business days from the approval date.',
      'Refund processing times may vary depending on your bank or payment provider. IRONPEAK is not responsible for delays caused by third-party financial institutions.',
    ],
  },
  {
    title: 'Membership Cancellation',
    content: [
      'Members may cancel their membership at any time subject to the following conditions:',
      '• Notice Period: A minimum of 15 days written notice is required before the next billing date for monthly memberships.\n• Annual Memberships: For annual membership plans, a prorated refund may be considered for the unused portion of the membership, minus any applicable administrative fees.\n• No-Show Cancellation: If cancellation is requested without proper notice, the current billing cycle will be charged in full.',
      'Cancellation requests must be submitted in writing. Verbal cancellation requests will not be accepted.',
    ],
  },
  {
    title: 'Free Trial Terms',
    content: [
      'IRONPEAK Fitness Studio may offer free trial periods for new members. The following terms apply to free trials:',
      '• No payment information is required to access a free trial.\n• Free trials automatically expire at the end of the trial period without any charge or obligation.\n• Services and features available during the trial may be limited compared to full membership.\n• IRONPEAK reserves the right to modify or discontinue free trial offers at any time without prior notice.',
      'Free trials are available to new members only and cannot be combined with other promotions or offers.',
    ],
  },
];

export default function RefundPolicy() {
  return (
    <PageLayout
      title="Refund Policy"
      description="Understand the refund and cancellation policies for IRONPEAK Fitness Studio memberships."
    >
      <div className="bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <RefreshCw className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Refund Policy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We aim to be fair and transparent with our refund and cancellation policies.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Last updated: September 2026
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 },
                  },
                }}
                className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8"
              >
                <h2 className="font-heading text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-dark-card border border-dark-border rounded-xl p-6 md:p-8"
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Contact for Refund Requests
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              To submit a refund request or if you have any questions about this policy,
              please contact us through the following channels:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@ironpeak.in"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                info@ironpeak.in
              </a>
              <a
                href="https://wa.me/919347295361"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                +91 93472 95361
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Owner: Shaik Mohammad Hafizulla
            </p>
            <p className="text-gray-500 text-sm">
              Guntur, Andhra Pradesh, India
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
