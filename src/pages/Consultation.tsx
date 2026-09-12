import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Activity,
  Target,
  Dumbbell,
  Apple,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { openWhatsApp } from '../utils/whatsapp';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const consultationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().optional(),
  fitnessGoal: z.string().optional(),
  preferredDate: z.string().min(1, 'Preferred date is required'),
  preferredTime: z.string().optional(),
  additionalMessage: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const fitnessGoals = [
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'muscle-gain', label: 'Muscle Gain' },
  { value: 'strength-training', label: 'Strength Training' },
  { value: 'general-fitness', label: 'General Fitness' },
  { value: 'sports-performance', label: 'Sports Performance' },
  { value: 'rehabilitation', label: 'Rehabilitation' },
];

const timeSlots = [
  { value: 'morning-6-9', label: 'Morning (6 AM - 9 AM)' },
  { value: 'late-morning-9-12', label: 'Late Morning (9 AM - 12 PM)' },
  { value: 'afternoon-12-3', label: 'Afternoon (12 PM - 3 PM)' },
  { value: 'evening-3-6', label: 'Evening (3 PM - 6 PM)' },
  { value: 'late-evening-6-9', label: 'Late Evening (6 PM - 9 PM)' },
];

const consultationIncludes = [
  {
    icon: Activity,
    title: 'Body Composition Analysis',
    description:
      'Get detailed insights into your body fat percentage, muscle mass, BMI, and metabolic rate using advanced measurement tools.',
  },
  {
    icon: Target,
    title: 'Fitness Goal Setting',
    description:
      'Work with our experts to define clear, achievable short-term and long-term fitness goals tailored to your lifestyle.',
  },
  {
    icon: Dumbbell,
    title: 'Custom Program Recommendation',
    description:
      'Receive a personalized workout program designed specifically for your current fitness level and desired outcomes.',
  },
  {
    icon: Apple,
    title: 'Nutrition Overview',
    description:
      'Get a comprehensive nutrition guideline to complement your training and accelerate your results.',
  },
  {
    icon: MessageCircle,
    title: 'Q&A Session',
    description:
      'Have all your fitness questions answered by our certified trainers and nutrition experts.',
  },
];

const benefits = [
  'Completely free with no obligations',
  'Personalized recommendations based on your body',
  'Professional assessment by certified trainers',
  'Take-home plan you can start immediately',
  'No commitment required to continue',
];

const testimonial = {
  name: 'Priya Reddy',
  role: 'Lost 12kg in 4 months',
  content:
    'The free consultation was eye-opening. I had no idea my body composition was so different from what I assumed. The trainer created a plan that fit my busy schedule perfectly. I\'m so glad I took that first step!',
  rating: 5,
};

export default function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const message = `*Free Fitness Consultation Request*

*Personal Information:*
Name: ${data.fullName}
Phone: ${data.phoneNumber}
Email: ${data.email || 'Not provided'}

*Consultation Details:*
Fitness Goal: ${data.fitnessGoal ? fitnessGoals.find((g) => g.value === data.fitnessGoal)?.label : 'Not specified'}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime ? timeSlots.find((t) => t.value === data.preferredTime)?.label : 'Flexible'}

*Additional Message:*
${data.additionalMessage || 'None'}`;

    openWhatsApp(message);
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <PageLayout
      title="Free Fitness Consultation"
      description="Book your free fitness consultation at IRONPEAK Fitness Studio. Get personalized guidance from certified trainers."
    >
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <ClipboardCheck size={16} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">Free Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              FREE FITNESS
              <span className="text-red-500"> CONSULTATION</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Start your fitness journey with a personalized assessment from our certified
              trainers. No obligations, just expert guidance.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="flex items-center gap-2">
                Book Your Free Consultation
                <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What's Included"
            subtitle="Your free consultation covers everything you need to get started on your fitness journey"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {consultationIncludes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Book Your Consultation
                  </h2>

                  {isSuccess ? (
                    <div className="text-center py-12">
                      <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        WhatsApp Opened!
                      </h3>
                      <p className="text-gray-400">
                        Your consultation request has been sent. We'll confirm your appointment
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        error={errors.fullName?.message}
                        {...register('fullName')}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input
                          label="Phone Number"
                          type="tel"
                          placeholder="Enter your phone number"
                          error={errors.phoneNumber?.message}
                          {...register('phoneNumber')}
                        />
                        <Input
                          label="Email (Optional)"
                          type="email"
                          placeholder="Enter your email"
                          error={errors.email?.message}
                          {...register('email')}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Fitness Goal
                        </label>
                        <select
                          className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                          {...register('fitnessGoal')}
                        >
                          <option value="">Select your fitness goal</option>
                          {fitnessGoals.map((goal) => (
                            <option key={goal.value} value={goal.value}>
                              {goal.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <Calendar size={14} className="inline mr-1" />
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                            {...register('preferredDate')}
                          />
                          {errors.preferredDate && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.preferredDate.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            <Clock size={14} className="inline mr-1" />
                            Preferred Time
                          </label>
                          <select
                            className="w-full px-4 py-3 bg-[#242424] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                            {...register('preferredTime')}
                          >
                            <option value="">Select preferred time</option>
                            {timeSlots.map((slot) => (
                              <option key={slot.value} value={slot.value}>
                                {slot.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <Textarea
                        label="Additional Message (Optional)"
                        placeholder="Any specific injuries, limitations, or goals you'd like us to know about..."
                        rows={4}
                        error={errors.additionalMessage?.message}
                        {...register('additionalMessage')}
                      />

                      <Button type="submit" variant="primary" fullWidth size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Calendar size={18} />
                            Book Free Consultation
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Benefits Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Why Book a Consultation?
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-green-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-red-900/20 to-[#1a1a1a] border border-red-600/20 rounded-2xl p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                      <User size={18} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">Prefer to Call?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    You can also book your consultation directly over the phone.
                  </p>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => window.open('tel:+919100527275')}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Call +91 9100527275
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
