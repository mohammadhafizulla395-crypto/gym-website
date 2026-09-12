import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Dumbbell,
  Trophy,
  Users,
  Calendar,
  Sparkles,
  Eye,
  Heart,
  ChevronRight,
  Star,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { TrainerCard } from '../components/ui/TrainerCard';
import { trainers } from '../data/trainers';
import { useModal } from '../context/ModalContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Expert Trainers',
    description: 'Certified professionals with years of experience dedicated to your success.',
  },
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights for every workout style.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Thousands of transformations backed by science and consistency.',
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'A motivating environment where everyone lifts each other up.',
  },
  {
    icon: Calendar,
    title: 'Flexible Plans',
    description: 'Programs and schedules that adapt to your lifestyle, not the other way around.',
  },
  {
    icon: Sparkles,
    title: 'Clean Facilities',
    description: 'A hygienic, well-maintained space for a comfortable workout experience.',
  },
];

const journey = [
  { year: '2015', title: 'Founded', description: 'IRONPEAK Fitness Studio opened its doors with a vision to transform lives through fitness.' },
  { year: '2017', title: '1,000 Members', description: 'Reached our first milestone of 1,000 active members, proving our approach works.' },
  { year: '2019', title: 'Expanded Facility', description: 'Doubled our space with new training zones, cardio areas, and recovery suites.' },
  { year: '2022', title: '5,000+ Members', description: 'Became a community of over 5,000 members with a 95% satisfaction rate.' },
  { year: '2024', title: 'Digital Transformation', description: 'Launched virtual training, an app, and smart tracking for a modern fitness experience.' },
];

const missionVision = [
  {
    icon: Heart,
    title: 'Our Mission',
    text: 'To empower individuals to achieve their fullest potential through expert guidance, innovative programs, and a community that believes in the transformative power of fitness.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted fitness destination, known for creating life-changing experiences and building a healthier, stronger community.',
  },
];

export default function About() {
  const { openModal } = useModal();
  const featuredTrainers = trainers.slice(0, 3);

  return (
    <PageLayout
      title="About Us"
      description="Learn about IRONPEAK Fitness Studio - our story, mission, and the team dedicated to your fitness transformation."
    >
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="IRONPEAK Gym"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
            EST. 2015
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            OUR <span className="text-gradient">STORY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            From a small studio with a big dream to a thriving community of 5,000+ members
            — this is the IRONPEAK journey.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Mission & Vision"
            subtitle="The principles that drive everything we do"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {missionVision.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-red-600/30 transition-colors"
              >
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Six reasons IRONPEAK is the right choice for your fitness journey"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-red-600/30 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <item.icon size={24} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Our Journey"
            subtitle="A decade of growth, dedication, and impact"
          />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <span className="text-red-500 font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-[#0f0f0f] -translate-x-1/2 shrink-0" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Meet Our Trainers"
            subtitle="Dedicated professionals committed to your transformation"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredTrainers.map((trainer) => (
              <motion.div key={trainer.id} variants={fadeInUp}>
                <TrainerCard
                  name={trainer.name}
                  specialty={trainer.specialty}
                  experience={trainer.experience}
                  image={trainer.image}
                  shortBio={trainer.shortBio}
                  availability={trainer.availability}
                  onBook={() => openModal('trainer', { name: trainer.name })}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              <Link to="/trainers" className="flex items-center gap-2">
                View All Trainers
                <ChevronRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/20 to-orange-500/20 border border-red-600/30 rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '5,000+', label: 'Active Members' },
                { value: '50+', label: 'Expert Trainers' },
                { value: '10+', label: 'Years Experience' },
                { value: '95%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Star size={32} className="text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of members who have transformed their lives at IRONPEAK.
              Your stronger self is waiting.
            </p>
            <Button variant="primary" size="lg">
              <Link to="/contact" className="flex items-center gap-2">
                Get In Touch
                <ChevronRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
