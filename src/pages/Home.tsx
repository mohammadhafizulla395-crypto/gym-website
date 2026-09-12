import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  Flame,
  TrendingUp,
  Target,
  Zap,
  Heart,
  Clock,
  Users,
  Award,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { PricingCard } from '../components/ui/PricingCard';
import { TrainerCard } from '../components/ui/TrainerCard';
import { TransformationCard } from '../components/ui/TransformationCard';
import { ReviewCard } from '../components/ui/ReviewCard';
import { FAQItem } from '../components/ui/FAQItem';
import { programs } from '../data/programs';
import { plans } from '../data/plans';
import { trainers } from '../data/trainers';
import { transformations } from '../data/transformations';
import { reviews } from '../data/reviews';
import { faqs } from '../data/faq';
import { openWhatsApp } from '../utils/whatsapp';

const programIcons: Record<string, React.ElementType> = {
  Dumbbell,
  Flame,
  TrendingUp,
  Target,
  Zap,
  Heart,
  Award,
  Users,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const mainPlans = plans.filter((p) => ['starter', 'pro', 'elite'].includes(p.id));
  const previewTrainners = trainers.slice(0, 3);
  const previewTransformations = transformations.slice(0, 3);
  const previewReviews = reviews.slice(0, 3);
  const previewFaqs = faqs.slice(0, 4);
  const previewPrograms = programs.slice(0, 4);

  const handlePlanSelect = (data: { planName: string; duration: string; price: number; months: number }) => {
    openWhatsApp(`Hi! I am interested in the ${data.planName} plan (${data.duration}) for ₹${data.price}. Please share more details.`);
  };

  const handleTrainerBook = () => {
    openWhatsApp('Hi! I would like to book a personal training session.');
  };

  const handleConsultation = () => {
    openWhatsApp('Hi! I would like to book a free fitness consultation.');
  };

  const benefits = [
    { icon: Award, title: 'Expert Trainers', desc: 'Certified professionals with years of experience' },
    { icon: Dumbbell, title: 'Modern Equipment', desc: 'State-of-the-art machines and free weights' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Open early morning to late night for your schedule' },
    { icon: Heart, title: 'Nutrition Guidance', desc: 'Personalized meal plans from certified nutritionists' },
    { icon: Users, title: 'Group Classes', desc: '20+ weekly classes including HIIT, yoga, and more' },
    { icon: Target, title: 'Personal Training', desc: 'One-on-one sessions tailored to your goals' },
  ];

  return (
    <PageLayout
      title="Home"
      description="IRONPEAK Fitness Studio - Premium gym in Guntur. Transform your body with expert trainers, modern equipment, and proven programs."
    >
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Gym interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-5 py-2 mb-8">
              <Sparkles size={16} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium tracking-wide">GUNTUR'S PREMIUM FITNESS STUDIO</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tight"
          >
            TRANSFORM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              YOUR BODY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Where dedication meets excellence. Premium fitness experience with world-class
            equipment, expert trainers, and a community that pushes you beyond limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
              <Link to="/consultation">
                <Button size="lg" className="group">
                  Start Free Trial
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            <Link to="/membership">
              <Button variant="outline" size="lg">
                View Plans
              </Button>
            </Link>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => openWhatsApp('Hi! I am interested in joining IRONPEAK Fitness Studio.')}
            >
              <MessageCircle size={18} className="mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-red-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { value: '5000+', label: 'Active Members', icon: Users },
              { value: '50+', label: 'Expert Trainers', icon: Award },
              { value: '10+', label: 'Years Experience', icon: Star },
              { value: '98%', label: 'Satisfaction Rate', icon: Heart },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-white/[0.07] transition-all duration-300"
              >
                <stat.icon size={28} className="mx-auto text-red-500 mb-3" />
                <p className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROGRAMS PREVIEW ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Our Programs"
              subtitle="Choose from a wide range of specialized training programs designed to help you achieve your fitness goals."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {previewPrograms.map((program) => {
              const IconComp = programIcons[program.icon] || Dumbbell;
              return (
                <motion.div key={program.id} variants={fadeUp}>
                  <Link to={`/programs/${program.slug}`}>
                    <div className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 bg-red-600/90 p-2 rounded-lg">
                          <IconComp size={18} className="text-white" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{program.shortDescription}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                            Learn More <ChevronRight size={14} />
                          </span>
                          <span className="text-gray-600 text-xs">{program.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link to="/programs">
              <Button variant="outline">
                View All Programs
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== MEMBERSHIP PREVIEW ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Membership Plans"
              subtitle="Choose the plan that fits your fitness journey. All plans include access to our premium facilities."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {mainPlans.map((plan) => (
              <motion.div key={plan.id} variants={fadeUp}>
                <PricingCard
                  name={plan.name}
                  durations={plan.durations}
                  features={plan.features}
                  popular={plan.popular}
                  description={plan.description}
                  onSelect={handlePlanSelect}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link to="/membership">
              <Button variant="outline">
                Compare All Plans
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PERSONAL TRAINING PREVIEW ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Meet Our Trainers"
              subtitle="Our certified trainers bring expertise, passion, and dedication to help you achieve your fitness goals."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {previewTrainners.map((trainer) => (
              <motion.div key={trainer.id} variants={fadeUp}>
                <TrainerCard
                  name={trainer.name}
                  specialty={trainer.specialty}
                  experience={trainer.experience}
                  image={trainer.image}
                  shortBio={trainer.shortBio}
                  availability={trainer.availability}
                  onBook={handleTrainerBook}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link to="/trainers">
              <Button variant="outline">
                View All Trainers
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Why Choose IRONPEAK"
              subtitle="We provide everything you need for a complete fitness transformation."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                className="group bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <benefit.icon size={24} className="text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TRANSFORMATION PREVIEW ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Real Transformations"
              subtitle="See the incredible results our members have achieved with dedication and our expert guidance."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {previewTransformations.map((t) => (
              <motion.div key={t.id} variants={fadeUp}>
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
                  onViewStory={() => window.location.href = '/transformations'}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link to="/transformations">
              <Button variant="outline">
                View All Transformations
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="What Our Members Say"
              subtitle="Join thousands of satisfied members who have transformed their lives at IRONPEAK."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {previewReviews.map((review) => (
              <motion.div key={review.id} variants={fadeUp}>
                <ReviewCard
                  name={review.name}
                  avatar={review.avatar}
                  rating={review.rating}
                  review={review.review}
                  program={review.program}
                  date={review.date}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SPECIAL OFFER CTA ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-8 md:p-14"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
                  <Sparkles size={14} className="text-yellow-300" />
                  <span className="text-white/90 text-sm font-medium">Limited Time Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                  Start Your <span className="text-yellow-300">FREE</span> 7-Day Trial
                </h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Experience everything IRONPEAK has to offer. Full gym access, group classes,
                  trainer consultation — completely free. No credit card required.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consultation">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 shadow-lg shadow-black/20">
                    Claim Free Trial
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => openWhatsApp('Hi! I want to claim the 7-Day Free Trial offer.')}
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FAQ PREVIEW ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our gym, membership, and facilities."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {previewFaqs.map((faq) => (
              <motion.div key={faq.id} variants={fadeUp}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link to="/faq">
              <Button variant="outline">
                View All FAQs
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CONSULTATION CTA ===== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="bg-[#1a1a1a] rounded-3xl border border-gray-800 p-8 md:p-14 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Not sure where to start? Book a free consultation with our fitness experts.
                We will assess your goals, create a personalized plan, and help you take the first step
                toward your transformation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={handleConsultation}>
                  Book Free Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <a href="tel:+919100527275">
                  <Button variant="outline" size="lg">
                    <Phone size={18} className="mr-2" />
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <SectionTitle
              title="Get In Touch"
              subtitle="Visit us or reach out through any of these channels."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp}>
              <a href="tel:+919100527275" className="block group">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors">
                    <Phone size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-white font-bold mb-1">Call Us</h3>
                  <p className="text-gray-400 text-sm">+91 91005 27275</p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-green-600/50 transition-all duration-300 text-center cursor-pointer"
                onClick={() => openWhatsApp('Hi! I have a question about IRONPEAK Fitness Studio.')}
              >
                <div className="w-14 h-14 bg-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/20 transition-colors">
                  <MessageCircle size={24} className="text-green-500" />
                </div>
                <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                <p className="text-gray-400 text-sm">Chat with us anytime</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="https://maps.google.com/?q=IRONPEAK+Fitness+Studio+Guntur"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300 text-center">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/20 transition-colors">
                    <MapPin size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-white font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400 text-sm">Guntur, Andhra Pradesh</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
