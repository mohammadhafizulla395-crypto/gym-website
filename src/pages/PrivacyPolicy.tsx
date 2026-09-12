import { motion } from 'framer-motion';
import { Shield, Mail, Phone } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'When you register for membership, sign up for a free trial, or contact us through our website or WhatsApp, we may collect the following personal information:',
      '• Full name\n• Phone number\n• Email address\n• Fitness goals and preferences',
      'We only collect information that is necessary to provide you with our fitness services and to communicate with you effectively.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      '• Service Delivery: To manage your membership, schedule classes, and provide personalized fitness guidance.\n• Communication: To send you updates about your membership, class schedules, promotions, and important announcements via SMS, email, or WhatsApp.\n• Improvement: To analyze usage patterns and improve our facilities, services, and overall member experience.',
      'We will not use your personal information for purposes unrelated to the services described above without your explicit consent.',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'IRONPEAK Fitness Studio does not sell, rent, or trade your personal information to any third party.',
      'We may share your information only in the following limited circumstances:',
      '• With third-party service providers who assist us in operating our website or managing our membership systems, subject to strict confidentiality agreements.\n• When required by law, regulation, or legal process.\n• To protect the rights, property, or safety of IRONPEAK, our members, or the public.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:',
      '• Secure storage of physical and digital records\n• Limited access to personal information on a need-to-know basis\n• Regular review of our data collection and storage practices',
      'While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We encourage you to take steps to protect your personal information as well.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'Our website may use basic cookies to enhance your browsing experience. Cookies are small text files placed on your device that help us understand how you use our website.',
      'We may use cookies for:',
      '• Remembering your preferences\n• Analyzing website traffic and usage patterns\n• Improving website functionality',
      'You can choose to disable cookies through your browser settings, though some features of our website may not function properly without them.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website.',
      'We encourage you to review this page periodically to stay informed about how we are protecting your information. Your continued use of our services after any modifications constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Learn how IRONPEAK Fitness Studio collects, uses, and protects your personal information."
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
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how IRONPEAK Fitness Studio
              handles your personal information.
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
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or how we handle your
              personal information, please contact us:
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
