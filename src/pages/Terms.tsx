import { motion } from 'framer-motion';
import { FileText, Mail, Phone } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the services provided by IRONPEAK Fitness Studio ("the Gym"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
      'These terms apply to all members, guests, and visitors of IRONPEAK Fitness Studio. We reserve the right to modify these terms at any time, and continued use of our services constitutes acceptance of any changes.',
    ],
  },
  {
    title: 'Membership Terms',
    content: [
      'Membership Options: IRONPEAK offers various membership plans including monthly, quarterly, and annual subscriptions. Specific benefits and pricing are outlined in our membership packages.',
      'Cancellation: Members may cancel their membership by providing written notice at least 15 days prior to the next billing cycle. Cancellation requests can be submitted via email or in person at the gym.',
      'Freezing Membership: Members may freeze their membership for a minimum of 7 days and a maximum of 30 days per calendar year, subject to a nominal freeze fee. Medical freezes require a valid medical certificate.',
      'Transfer: Membership is non-transferable to another individual. However, members may upgrade or downgrade their plan subject to applicable fees and conditions.',
    ],
  },
  {
    title: 'Gym Rules and Etiquette',
    content: [
      'To ensure a safe and enjoyable environment for all members, the following rules must be observed:',
      '• Wear appropriate athletic clothing and footwear at all times\n• Use equipment properly and return weights to their designated storage areas\n• Wipe down equipment after use\n• Respect the personal space and comfort of other members\n• No recording or photography of other members without their explicit consent\n• Follow the instructions of trainers and staff\n• Maintain hygiene and cleanliness\n• No smoking or consumption of alcohol on the premises',
      'Violation of gym rules may result in warning, temporary suspension, or permanent termination of membership without refund.',
    ],
  },
  {
    title: 'Liability Waiver',
    content: [
      'By using the facilities at IRONPEAK Fitness Studio, you acknowledge and agree that:',
      '• Physical exercise involves inherent risks of injury\n• You are physically capable of participating in exercise activities\n• You assume all risks associated with your use of the gym facilities\n• IRONPEAK Fitness Studio, its owners, trainers, and staff are not liable for any injuries, damages, or losses arising from your use of the facilities',
      'Members are strongly advised to consult with a physician before beginning any exercise program. Members with pre-existing medical conditions must inform gym staff before using equipment.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on the IRONPEAK Fitness Studio website and marketing materials, including text, graphics, logos, images, and software, is the property of IRONPEAK Fitness Studio and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from IRONPEAK Fitness Studio.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'IRONPEAK Fitness Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:',
      '• Your use of or inability to use the gym facilities\n• Any unauthorized access to or alteration of your data\n• Statements or conduct of any third party on the premises',
      'Our total liability for any claims arising from membership or use of facilities shall not exceed the amount paid by you for membership during the twelve months preceding the claim.',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of India, specifically the state of Andhra Pradesh.',
      'Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Guntur, Andhra Pradesh, India.',
    ],
  },
];

export default function Terms() {
  return (
    <PageLayout
      title="Terms and Conditions"
      description="Read the terms and conditions governing membership and use of IRONPEAK Fitness Studio facilities."
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
              Terms and Conditions
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our facilities or becoming a member.
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
              If you have any questions about these Terms and Conditions, please contact us:
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
