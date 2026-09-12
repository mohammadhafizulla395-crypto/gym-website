import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { TrainerCard } from '../components/ui/TrainerCard';
import { Modal } from '../components/ui/Modal';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { Button } from '../components/ui/Button';
import { trainers } from '../data/trainers';
import { useModal } from '../context/ModalContext';
import {
  Target,
  TrendingUp,
  ShieldCheck,
  Clock,
  Brain,
  Trophy,
  ArrowRight,
  Quote,
} from 'lucide-react';

const benefits = [
  { icon: Target, title: 'Customized Programs', desc: 'Tailored workout plans designed specifically for your body type, goals, and fitness level.' },
  { icon: TrendingUp, title: 'Faster Results', desc: 'Expert guidance accelerates your progress, helping you achieve visible results in less time.' },
  { icon: ShieldCheck, title: 'Injury Prevention', desc: 'Proper form correction and technique coaching reduces the risk of injuries during training.' },
  { icon: Clock, title: 'Accountability', desc: 'Scheduled sessions keep you consistent and committed to your fitness transformation.' },
  { icon: Brain, title: 'Expert Knowledge', desc: 'Access to certified professionals with years of experience in fitness and nutrition.' },
  { icon: Trophy, title: 'Motivation & Support', desc: 'A dedicated coach who pushes you beyond your limits while keeping you motivated.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function PersonalTraining() {
  const { modal, openModal, closeModal } = useModal();
  const [selectedTrainer, setSelectedTrainer] = useState('');

  const handleBookTrainer = (trainerName: string) => {
    setSelectedTrainer(trainerName);
    openModal('personal-training', { preferredTrainer: trainerName });
  };

  return (
    <PageLayout
      title="Personal Training"
      description="Get dedicated one-on-one training with our expert certified trainers at IRONPEAK Fitness Studio."
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
              title="PERSONAL TRAINING"
              subtitle="Unlock your full potential with dedicated one-on-one coaching from our certified fitness experts."
            />
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Personal training at IRONPEAK is more than just a workout — it's a complete transformation experience.
              Our certified trainers design programs tailored to your unique body type, fitness level, and goals.
              Whether you're looking to lose weight, build muscle, improve flexibility, or train for a specific event,
              our experts will guide you every step of the way.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Each session is carefully structured to maximize results while minimizing the risk of injury.
              With regular progress tracking, nutritional guidance, and form correction, you'll see measurable
              improvements week after week. Your success is our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Expert Trainers"
            subtitle="Meet the professionals who will guide you to your fitness goals."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <TrainerCard
                  name={trainer.name}
                  specialty={trainer.specialty}
                  experience={trainer.experience}
                  image={trainer.image}
                  shortBio={trainer.shortBio}
                  availability={trainer.availability}
                  onBook={() => handleBookTrainer(trainer.name)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Personal Training */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Why Choose Personal Training"
            subtitle="The advantages of working with a dedicated fitness professional."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <benefit.icon size={24} className="text-red-500" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Client Success Story"
            subtitle="Hear from someone who transformed their life with personal training."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 md:p-12 relative"
          >
            <Quote size={48} className="absolute top-6 left-6 text-red-600/20" />
            <div className="relative z-10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "I joined IRONPEAK six months ago, barely able to do 5 push-ups. Today I've lost 18kg,
                gained visible muscle definition, and feel stronger than I ever have. My trainer Rajesh
                didn't just give me workouts — he changed my entire approach to fitness and nutrition.
                The personalized attention made all the difference. I genuinely look forward to every session."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                  <span className="text-red-500 font-bold text-lg">A</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Amit Deshpande</p>
                  <p className="text-gray-400 text-sm">Lost 18kg in 6 months</p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Transform?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Book a free consultation with one of our trainers and discover how personal training can change your life.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleBookTrainer('Any Available Trainer')}
            >
              <span className="flex items-center gap-2">
                Book Free Consultation <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen && modal.type === 'personal-training'}
        onClose={closeModal}
        title={`Book ${selectedTrainer || 'Personal Training'}`}
      >
        <EnquiryForm
          section="Personal Training Enquiry"
          fields={[
            { name: 'fullName', label: 'Full Name', required: true },
            { name: 'phone', label: 'Phone', required: true },
            { name: 'preferredTrainer', label: 'Preferred Trainer', type: 'text' },
            {
              name: 'fitnessGoal',
              label: 'Fitness Goal',
              type: 'select',
              options: [
                { value: 'Weight Loss', label: 'Weight Loss' },
                { value: 'Muscle Gain', label: 'Muscle Gain' },
                { value: 'Strength', label: 'Strength' },
                { value: 'Flexibility', label: 'Flexibility' },
                { value: 'General Fitness', label: 'General Fitness' },
              ],
            },
            { name: 'preferredDate', label: 'Preferred Date', type: 'date' },
            { name: 'message', label: 'Message', type: 'textarea' },
          ]}
          defaultValues={{ preferredTrainer: selectedTrainer }}
          onSuccess={closeModal}
        />
      </Modal>
    </PageLayout>
  );
}
