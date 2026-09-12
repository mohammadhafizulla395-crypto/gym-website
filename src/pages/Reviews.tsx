import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Users, TrendingUp } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ReviewCard } from '../components/ui/ReviewCard';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { reviews } from '../data/reviews';
import { sendToWhatsApp } from '../utils/whatsapp';

const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  rating: z.string().min(1, 'Rating is required'),
  program: z.string().min(1, 'Program is required'),
  review: z.string().min(1, 'Review is required'),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

const ratingOptions = [
  { value: '5', label: '5 Stars' },
  { value: '4', label: '4 Stars' },
  { value: '3', label: '3 Stars' },
  { value: '2', label: '2 Stars' },
  { value: '1', label: '1 Star' },
];

const programOptions = [
  { value: 'Strength Training', label: 'Strength Training' },
  { value: 'Fat Loss', label: 'Fat Loss' },
  { value: 'Muscle Building', label: 'Muscle Building' },
  { value: 'HIIT', label: 'HIIT' },
  { value: 'Functional Training', label: 'Functional Training' },
  { value: 'Personal Training', label: 'Personal Training' },
  { value: 'Group Classes', label: 'Group Classes' },
];

const stats = [
  { icon: Star, label: 'Average Rating', value: '4.9/5', color: 'text-yellow-500' },
  { icon: Users, label: 'Happy Members', value: '500+', color: 'text-red-500' },
  { icon: ThumbsUp, label: 'Recommendation', value: '98%', color: 'text-green-500' },
  { icon: TrendingUp, label: 'Retention Rate', value: '92%', color: 'text-orange-500' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: '',
      program: '',
    },
  });

  const onSubmit = async (data: ReviewFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    sendToWhatsApp('New Member Review', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsModalOpen(false);
      reset();
    }, 3000);
  };

  return (
    <PageLayout
      title="Member Reviews"
      description="Read authentic reviews from IRONPEAK members who have transformed their lives through our programs."
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              MEMBER <span className="text-red-500">REVIEWS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Hear from our members about their experience at IRONPEAK Fitness Studio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 rounded-2xl px-8 py-5"
          >
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-3xl font-bold text-white">4.9</p>
            </div>
            <div className="h-12 w-px bg-gray-700" />
            <div className="text-left">
              <p className="text-gray-400 text-sm">Based on</p>
              <p className="text-white font-semibold">500+ Reviews</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <SectionTitle
              title="What Our Members Say"
              subtitle="Real stories from real people who chose to transform at IRONPEAK."
              centered={false}
            />
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              <span className="flex items-center gap-2">
                <Star size={16} />
                Write a Review
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
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
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-b from-[#111] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Review Statistics"
            subtitle="The numbers behind our member satisfaction."
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

      {/* Review Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          reset();
          setIsSuccess(false);
        }}
        title="Write a Review"
      >
        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={32} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-400">Your review is being sent via WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Your Name"
              placeholder="Enter your name"
              error={errors.name?.message}
              {...register('name')}
            />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
              <select
                className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                {...register('rating')}
              >
                <option value="">Select rating</option>
                {ratingOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.rating && (
                <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Program Attended</label>
              <select
                className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                {...register('program')}
              >
                <option value="">Select program</option>
                {programOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.program && (
                <p className="mt-1 text-sm text-red-500">{errors.program.message}</p>
              )}
            </div>

            <Textarea
              label="Your Review"
              placeholder="Share your experience at IRONPEAK..."
              rows={4}
              error={errors.review?.message}
              {...register('review')}
            />

            <Button type="submit" variant="whatsapp" fullWidth disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Star size={18} />
                  Submit Review
                </span>
              )}
            </Button>
          </form>
        )}
      </Modal>
    </PageLayout>
  );
}
