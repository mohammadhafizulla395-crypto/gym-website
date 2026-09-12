import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Navigation,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { openWhatsApp } from '../utils/whatsapp';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    value: '123 Fitness Lane, Guntur, AP 522001',
    action: () =>
      window.open('https://maps.google.com/?q=123+Fitness+Lane+Guntur+AP+522001', '_blank'),
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9100527275',
    action: () => window.open('tel:+919100527275'),
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@ironpeakfitness.com',
    action: () => window.open('mailto:info@ironpeakfitness.com'),
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon-Sat: 5AM-10PM | Sun: 6AM-8PM',
    action: undefined,
  },
];

const socialLinks = [
  { label: 'Instagram', url: 'https://instagram.com', svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: 'Facebook', url: 'https://facebook.com', svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: 'YouTube', url: 'https://youtube.com', svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const message = `*Contact Form Submission*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Subject:* ${data.subject}

*Message:*
${data.message}`;

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
      title="Contact Us"
      description="Get in touch with IRONPEAK Fitness Studio. Visit us, call, or message us on WhatsApp."
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
              <Phone size={16} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              CONTACT <span className="text-red-500">US</span>
            </h1>
            <p className="text-gray-400 text-lg">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={info.action}
                className={`bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center ${
                  info.action
                    ? 'hover:border-red-600/50 cursor-pointer transition-all duration-300'
                    : ''
                }`}
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <info.icon size={22} className="text-red-500" />
                </div>
                <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                <p className="text-gray-400 text-sm">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#242424] border border-gray-800 rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col">
                  <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-[#1a1a1a] to-orange-900/10" />
                    <div className="relative text-center p-8">
                      <MapPin
                        size={48}
                        className="mx-auto text-red-500/50 mb-4"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">
                        Map Coming Soon
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        123 Fitness Lane, Guntur, AP 522001
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            'https://maps.google.com/?q=123+Fitness+Lane+Guntur+AP+522001',
                            '_blank'
                          )
                        }
                      >
                        <span className="flex items-center gap-2">
                          <Navigation size={14} />
                          Open in Google Maps
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-gray-400 text-sm mb-6">
                    Fill out the form and we'll get back to you via WhatsApp.
                  </p>

                  {isSuccess ? (
                    <div className="text-center py-12">
                      <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-400">
                        Your message has been sent via WhatsApp.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Name"
                          placeholder="Your name"
                          error={errors.name?.message}
                          {...register('name')}
                        />
                        <Input
                          label="Phone"
                          type="tel"
                          placeholder="Your phone number"
                          error={errors.phone?.message}
                          {...register('phone')}
                        />
                      </div>
                      <Input
                        label="Subject"
                        placeholder="What is this about?"
                        error={errors.subject?.message}
                        {...register('subject')}
                      />
                      <Textarea
                        label="Message"
                        placeholder="Your message..."
                        rows={4}
                        error={errors.message?.message}
                        {...register('message')}
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send size={18} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => window.open('tel:+919100527275')}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone size={18} />
                    Call Now
                  </span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Button
                  variant="whatsapp"
                  fullWidth
                  size="lg"
                  onClick={() =>
                    openWhatsApp(
                      'Hi IRONPEAK! I would like to know more about your gym.'
                    )
                  }
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  variant="outline"
                  fullWidth
                  size="lg"
                  onClick={() =>
                    window.open(
                      'https://maps.google.com/?q=123+Fitness+Lane+Guntur+AP+522001',
                      '_blank'
                    )
                  }
                >
                  <span className="flex items-center justify-center gap-2">
                    <Navigation size={18} />
                    Get Directions
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Follow Us</h2>
            <p className="text-gray-400 mb-8">
              Stay connected and get the latest updates on fitness tips, events, and offers.
            </p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-[#1a1a1a] border border-gray-800 rounded-xl flex items-center justify-center hover:border-red-600/50 hover:bg-red-600/10 transition-all duration-300"
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
