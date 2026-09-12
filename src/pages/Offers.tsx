import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Modal } from '../components/ui/Modal';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { Button } from '../components/ui/Button';
import { offers } from '../data/offers';
import { formatDate } from '../utils/helpers';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function Offers() {
  const [selectedOffer, setSelectedOffer] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClaimOffer = (offerTitle: string) => {
    setSelectedOffer(offerTitle);
    setIsModalOpen(true);
  };

  return (
    <PageLayout
      title="Special Offers"
      description="Grab exclusive offers and deals at IRONPEAK Fitness Studio. Limited time promotions for new and existing members."
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
              SPECIAL <span className="text-red-500">OFFERS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Take advantage of our limited-time offers and start your fitness journey at the best price.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative bg-[#1a1a1a] rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col"
              >
                {offer.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-red-600/30">
                      {offer.badge}
                    </span>
                  </div>
                )}

                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: offer.color }}
                />

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor: `${offer.color}20`,
                        color: offer.color,
                      }}
                    >
                      {offer.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: offer.color }}
                      >
                        {offer.discount}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{offer.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock size={14} />
                    <span>Valid until {formatDate(offer.validUntil)}</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {offer.terms.map((term, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-gray-500 mt-0.5 shrink-0" />
                        <span className="text-gray-400 text-sm">{term}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => handleClaimOffer(offer.title)}
                  >
                    <span className="flex items-center gap-2">
                      Claim Offer
                      <ArrowRight size={16} />
                    </span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-b from-[#111] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-600/30 rounded-2xl p-12"
          >
            <Zap size={48} className="mx-auto text-red-500 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Offers Ending <span className="text-red-500">Soon!</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              These exclusive deals won't last forever. Secure your spot and lock in the best rates before they're gone.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleClaimOffer('General Enquiry')}
            >
              <span className="flex items-center gap-2">
                Enquire Now <ArrowRight size={18} />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Claim: ${selectedOffer}`}
      >
        <EnquiryForm
          section="Offer Enquiry"
          fields={[
            { name: 'fullName', label: 'Full Name', required: true },
            { name: 'phone', label: 'Phone', required: true },
            { name: 'selectedOffer', label: 'Selected Offer', type: 'text' },
            { name: 'startDate', label: 'Preferred Start Date', type: 'date' },
            { name: 'message', label: 'Message', type: 'textarea' },
          ]}
          defaultValues={{ selectedOffer }}
          onSuccess={() => setIsModalOpen(false)}
        />
      </Modal>
    </PageLayout>
  );
}
