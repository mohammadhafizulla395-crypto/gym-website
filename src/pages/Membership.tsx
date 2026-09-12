import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { PricingCard } from '../components/ui/PricingCard';
import { Modal } from '../components/ui/Modal';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { Button } from '../components/ui/Button';
import { plans } from '../data/plans';
import { useModal } from '../context/ModalContext';
import { formatPrice } from '../utils/helpers';
import { Dumbbell, Users, Lock, Wifi, HeartPulse, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';

const includedFeatures = [
  { icon: Dumbbell, label: 'Full Gym Access', desc: 'State-of-the-art equipment and machines' },
  { icon: Users, label: 'Group Classes', desc: 'Zumba, Yoga, HIIT, and more' },
  { icon: Lock, label: 'Personal Locker', desc: 'Secure storage for your belongings' },
  { icon: Wifi, label: 'Free Wi-Fi', desc: 'Stay connected while you train' },
  { icon: HeartPulse, label: 'Health Tracking', desc: 'Monthly body composition reports' },
  { icon: CalendarCheck, label: 'Flexible Scheduling', desc: 'Train anytime that suits you' },
  { icon: Sparkles, label: 'Free Assessment', desc: 'Complimentary fitness evaluation' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function Membership() {
  const { modal, openModal, closeModal } = useModal();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handleSelectPlan = (data: { planName: string; duration: string; price: number; months: number }) => {
    setSelectedPlan(data.planName);
    setSelectedDuration(data.duration);
    setSelectedPrice(data.price);
    openModal('membership', {
      selectedPlan: data.planName,
      selectedDuration: data.duration,
      selectedPrice: formatPrice(data.price),
    });
  };

  return (
    <PageLayout
      title="Membership Plans"
      description="Choose the perfect membership plan for your fitness journey at IRONPEAK Fitness Studio."
    >
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="MEMBERSHIP PLANS"
              subtitle="Invest in yourself. Choose a plan that matches your goals and start transforming your body today."
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Compare our plans and find the perfect fit. Every membership includes access to our world-class facility and expert support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={plan.popular ? 'lg:scale-105 lg:z-10' : ''}
              >
                <PricingCard
                  name={plan.name}
                  durations={plan.durations}
                  features={plan.features}
                  popular={plan.popular}
                  description={plan.description}
                  onSelect={handleSelectPlan}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="What's Included"
            subtitle="Every membership comes with these premium benefits at no extra cost."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedFeatures.map((feature, i) => (
              <motion.div
                key={feature.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <feature.icon size={24} className="text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.label}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-600/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Plan?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Start with a free trial session. Experience our facility, meet our trainers, and find the perfect plan for your goals.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleSelectPlan({ planName: 'Free Trial', duration: '7 Days', price: 0, months: 0 })}
            >
              <span className="flex items-center gap-2">
                Claim Free Trial <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen && modal.type === 'membership'}
        onClose={closeModal}
        title={`Join ${selectedPlan || 'IRONPEAK'}`}
      >
        <EnquiryForm
          section="Membership Enquiry"
          fields={[
            { name: 'fullName', label: 'Full Name', required: true },
            { name: 'phone', label: 'Phone', required: true },
            { name: 'selectedPlan', label: 'Selected Plan', type: 'text' },
            { name: 'selectedDuration', label: 'Duration', type: 'text' },
            { name: 'selectedPrice', label: 'Price', type: 'text' },
            { name: 'startDate', label: 'Preferred Start Date', type: 'date' },
            { name: 'message', label: 'Message', type: 'textarea' },
          ]}
          defaultValues={{
            selectedPlan: selectedPlan,
            selectedDuration: selectedDuration,
            selectedPrice: selectedPrice > 0 ? formatPrice(selectedPrice) : 'Free Trial',
          }}
          onSuccess={closeModal}
        />
      </Modal>
    </PageLayout>
  );
}
