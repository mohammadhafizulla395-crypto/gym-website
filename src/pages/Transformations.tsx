import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Dumbbell, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { TransformationCard } from '../components/ui/TransformationCard';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { transformations } from '../data/transformations';
import { openWhatsApp } from '../utils/whatsapp';

const categories = ['All', 'Weight Loss', 'Muscle Gain', 'Strength', 'Fitness', 'Transformation'];

const stats = [
  { icon: Trophy, label: 'Transformations', value: '500+', color: 'text-yellow-500' },
  { icon: TrendingUp, label: 'kg Lost', value: '2000+', color: 'text-red-500' },
  { icon: Dumbbell, label: 'Muscle Gained', value: '500+ kg', color: 'text-green-500' },
  { icon: Target, label: 'Success Rate', value: '98%', color: 'text-orange-500' },
];

export default function Transformations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedTransformation, setSelectedTransformation] = useState<typeof transformations[0] | null>(null);

  const filteredTransformations = useMemo(() => {
    if (activeCategory === 'All') return transformations;
    return transformations.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  const handleViewStory = (transformation: typeof transformations[0]) => {
    setSelectedTransformation(transformation);
  };

  const handleStartJourney = () => {
    openWhatsApp('Hi! I want to start my transformation journey at IRONPEAK.');
  };

  return (
    <PageLayout
      title="Transformations"
      description="Real transformations from real people at IRONPEAK Fitness Studio."
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
              OUR <span className="text-red-500">TRANSFORMATIONS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See the incredible results our members have achieved through dedication and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTransformations.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <TransformationCard
                  name={t.name}
                  age={t.age}
                  goal={t.goal}
                  duration={t.duration}
                  weightLost={t.weightLost}
                  muscleGained={t.muscleGained}
                  beforeImage={t.beforeImage}
                  afterImage={t.afterImage}
                  story={t.story}
                  onViewStory={() => handleViewStory(t)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#111] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Collective Results"
            subtitle="The numbers speak for themselves."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800"
              >
                <stat.icon size={32} className={`mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start <span className="text-red-500">Your Transformation</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join hundreds of others who have transformed their bodies and lives at IRONPEAK.
            </p>
            <Button variant="primary" size="lg" onClick={handleStartJourney}>
              <span className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedTransformation}
        onClose={() => setSelectedTransformation(null)}
        title={selectedTransformation ? `${selectedTransformation.name}'s Full Story` : ''}
        size="lg"
      >
        {selectedTransformation && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={selectedTransformation.beforeImage}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                  BEFORE
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={selectedTransformation.afterImage}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-medium">
                  AFTER
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-[#242424] rounded-lg">
                <Target size={18} className="mx-auto text-red-500 mb-1" />
                <p className="text-white font-semibold">{selectedTransformation.weightLost}</p>
                <p className="text-gray-500 text-xs">Lost</p>
              </div>
              <div className="text-center p-3 bg-[#242424] rounded-lg">
                <Dumbbell size={18} className="mx-auto text-green-500 mb-1" />
                <p className="text-white font-semibold">{selectedTransformation.muscleGained}</p>
                <p className="text-gray-500 text-xs">Gained</p>
              </div>
              <div className="text-center p-3 bg-[#242424] rounded-lg">
                <Flame size={18} className="mx-auto text-orange-500 mb-1" />
                <p className="text-white font-semibold">{selectedTransformation.duration}</p>
                <p className="text-gray-500 text-xs">Duration</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Full Story</h4>
              <p className="text-gray-300 leading-relaxed">{selectedTransformation.story}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Goal: {selectedTransformation.goal}</span>
              <span>|</span>
              <span>Age: {selectedTransformation.age}</span>
            </div>

            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                openWhatsApp(`Hi! I was inspired by ${selectedTransformation.name}'s transformation and want to start my own journey at IRONPEAK.`);
                setSelectedTransformation(null);
              }}
            >
              Start My Transformation
            </Button>
          </div>
        )}
      </Modal>
    </PageLayout>
  );
}
