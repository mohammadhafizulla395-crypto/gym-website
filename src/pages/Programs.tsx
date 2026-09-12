import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Flame,
  ChevronRight,
  Check,
  Dumbbell,
  TrendingUp,
  Target,
  Zap,
  Heart,
  Trophy,
  User,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { programs, type Program } from '../data/programs';

const difficultyFilters = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

const iconMap: Record<string, typeof Dumbbell> = {
  Dumbbell,
  Flame,
  TrendingUp,
  Target,
  Zap,
  Heart,
  Trophy,
  User,
};

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
  Intermediate: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Advanced: 'bg-red-500/10 text-red-400 border-red-500/20',
  'All Levels': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPrograms =
    activeFilter === 'All'
      ? programs
      : programs.filter(
          (p) => p.difficulty === activeFilter || p.difficulty === 'All Levels'
        );

  const openEnquiry = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const enquiryFields = [
    { name: 'fullName', label: 'Full Name', required: true },
    { name: 'phone', label: 'Phone', required: true },
    {
      name: 'program',
      label: 'Selected Program',
      required: true,
      options: programs.map((p) => ({ value: p.title, label: p.title })),
    },
    { name: 'startDate', label: 'Preferred Start Date', type: 'date' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ];

  return (
    <PageLayout
      title="Our Programs"
      description="Explore IRONPEAK's diverse range of fitness programs designed to help you achieve your goals."
    >
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="IRONPEAK Programs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            OUR <span className="text-gradient">PROGRAMS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Find the perfect program for your fitness goals, experience level, and schedule.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {difficultyFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                    : 'bg-[#1a1a1a] text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPrograms.map((program) => {
                const Icon = iconMap[program.icon] || Dumbbell;
                return (
                  <motion.div
                    key={program.id}
                    variants={fadeInUp}
                    layout
                    className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 card-hover flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
                            difficultyColors[program.difficulty]
                          }`}
                        >
                          {program.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                            <Icon size={20} className="text-red-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{program.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Clock size={14} />
                          <span>{program.duration}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {program.shortDescription}
                      </p>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                          Benefits
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {program.benefits.slice(0, 3).map((benefit) => (
                            <span
                              key={benefit}
                              className="inline-flex items-center gap-1 text-xs text-gray-400 bg-[#242424] px-2 py-1 rounded"
                            >
                              <Check size={10} className="text-green-500" />
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                          What's Included
                        </h4>
                        <div className="grid grid-cols-2 gap-1">
                          {program.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs text-gray-400 flex items-center gap-1"
                            >
                              <ChevronRight size={10} className="text-red-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Button
                          variant="primary"
                          fullWidth
                          onClick={() => openEnquiry(program)}
                        >
                          <span className="flex items-center gap-2">
                            Enquire Now
                            <ChevronRight size={16} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredPrograms.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No programs found for this filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enquiry Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Enquire About ${selectedProgram?.title || ''}`}
        size="lg"
      >
        {selectedProgram && (
          <EnquiryForm
            section={`Program Enquiry - ${selectedProgram.title}`}
            fields={enquiryFields}
            defaultValues={{ program: selectedProgram.title }}
            onSuccess={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
    </PageLayout>
  );
}
