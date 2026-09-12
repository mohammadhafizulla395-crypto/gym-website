import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { FAQItem } from '../components/ui/FAQItem';
import { Button } from '../components/ui/Button';
import { faqs, type FAQ } from '../data/faq';
import { openWhatsApp } from '../utils/whatsapp';

const categories = ['All', 'General', 'Membership', 'Training', 'Facilities'] as const;

const contactOptions = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 9100527275',
    action: () => window.open('tel:+919100527275'),
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    action: () => openWhatsApp('Hi! I have a question that wasn\'t answered in the FAQ.'),
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ironpeakfitness.com',
    action: () => window.open('mailto:info@ironpeakfitness.com'),
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <PageLayout
      title="FAQ"
      description="Find answers to the most frequently asked questions about IRONPEAK Fitness Studio - memberships, training, facilities, and more."
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
              <HelpCircle size={16} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              FREQUENTLY ASKED
              <span className="text-red-500"> QUESTIONS</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about IRONPEAK Fitness Studio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {/* Search */}
            <div className="relative mb-6">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                      : 'bg-[#1a1a1a] text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <HelpCircle size={48} className="mx-auto text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No questions found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#242424] rounded-2xl border border-gray-800 p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/10 rounded-full mb-6">
                <HelpCircle size={32} className="text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help.
                Reach out to us and we'll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactOptions.map((option) => (
                  <motion.button
                    key={option.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={option.action}
                    className="flex flex-col items-center gap-3 p-6 bg-[#1a1a1a] border border-gray-800 rounded-xl hover:border-red-600/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center">
                      <option.icon size={22} className="text-red-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{option.label}</p>
                      <p className="text-gray-400 text-sm">{option.value}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    openWhatsApp('Hi! I have a question about IRONPEAK Fitness Studio.')
                  }
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
