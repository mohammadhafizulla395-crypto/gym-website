import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Clock, Star } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { TrainerCard } from '../components/ui/TrainerCard';
import { Modal } from '../components/ui/Modal';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { trainers } from '../data/trainers';

const qualifications = [
  { icon: Award, label: 'Certified Trainers', value: '25+', color: 'text-yellow-500' },
  { icon: Clock, label: 'Years Combined Experience', value: '40+', color: 'text-red-500' },
  { icon: Users, label: 'Clients Trained', value: '2000+', color: 'text-green-500' },
  { icon: BookOpen, label: 'Specializations', value: '10+', color: 'text-orange-500' },
];

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);

  const handleBookTrainer = (trainer: typeof trainers[0]) => {
    setSelectedTrainer(trainer);
  };

  const enquiryFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    {
      name: 'fitnessGoal',
      label: 'Fitness Goal',
      type: 'select',
      options: [
        { value: 'Weight Loss', label: 'Weight Loss' },
        { value: 'Muscle Gain', label: 'Muscle Gain' },
        { value: 'Strength Training', label: 'Strength Training' },
        { value: 'Functional Fitness', label: 'Functional Fitness' },
        { value: 'Yoga & Flexibility', label: 'Yoga & Flexibility' },
        { value: 'HIIT & Cardio', label: 'HIIT & Cardio' },
        { value: 'General Fitness', label: 'General Fitness' },
      ],
    },
    { name: 'preferredDate', label: 'Preferred Date', type: 'date' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ];

  return (
    <PageLayout
      title="Trainers"
      description="Meet our expert fitness trainers at IRONPEAK Fitness Studio."
    >
      <section className="relative py-20 bg-gradient-to-b from-[#1a1a1a] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              MEET OUR <span className="text-red-500">TRAINERS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our certified trainers bring years of experience and passion to help you achieve your fitness goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Expert Team"
            subtitle="Each trainer brings unique expertise to help you reach your goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TrainerCard
                  name={trainer.name}
                  specialty={trainer.specialty}
                  experience={trainer.experience}
                  image={trainer.image}
                  shortBio={trainer.shortBio}
                  availability={trainer.availability}
                  onBook={() => handleBookTrainer(trainer)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#111] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Trainer Qualifications"
            subtitle="Our team is dedicated to continuous learning and excellence."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800"
              >
                <qual.icon size={32} className={`mx-auto mb-3 ${qual.color}`} />
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{qual.value}</p>
                <p className="text-gray-400 text-sm">{qual.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Trainers' Certifications"
            subtitle="Every trainer holds multiple recognized certifications."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainers.map((trainer) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 bg-[#1a1a1a] rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{trainer.name}</h4>
                    <p className="text-gray-500 text-xs">{trainer.specialty}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2 py-1 bg-[#242424] text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
        title={selectedTrainer ? `Book Session with ${selectedTrainer.name}` : ''}
        size="md"
      >
        {selectedTrainer && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[#242424] rounded-xl">
              <img
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-bold">{selectedTrainer.name}</h4>
                <p className="text-red-400 text-sm">{selectedTrainer.specialty}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            <EnquiryForm
              section="Personal Training Enquiry"
              fields={enquiryFields}
              defaultValues={{ preferredTrainer: selectedTrainer.name }}
              onSuccess={() => setSelectedTrainer(null)}
            />
          </div>
        )}
      </Modal>
    </PageLayout>
  );
}
