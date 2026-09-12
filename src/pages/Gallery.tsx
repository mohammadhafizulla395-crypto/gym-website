import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { SectionTitle } from '../components/ui/SectionTitle';
import { GalleryLightbox } from '../components/ui/GalleryLightbox';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleImageClick = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleNavigate = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <PageLayout
      title="Gallery"
      description="Explore the IRONPEAK Fitness Studio through our photo gallery."
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
              <span className="text-red-500">GALLERY</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Take a virtual tour of our world-class facilities and see what makes IRONPEAK special.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((category) => (
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                onClick={() => handleImageClick(index)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                } ${index % 7 === 0 ? 'md:col-span-2' : ''}`}
              >
                <div
                  className={`relative ${
                    index % 5 === 0 ? 'h-80 md:h-full' : index % 7 === 0 ? 'h-64' : 'h-64'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ImageIcon size={32} className="text-white mb-2" />
                    <p className="text-white font-semibold text-lg text-center px-4">{item.title}</p>
                    <p className="text-gray-300 text-sm text-center px-4 mt-1">{item.description}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#111] to-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Camera size={48} className="mx-auto text-red-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visit Us in <span className="text-red-500">Person</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Come experience our world-class facilities firsthand. Schedule a free tour today.
            </p>
          </motion.div>
        </div>
      </section>

      <GalleryLightbox
        images={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigate}
      />
    </PageLayout>
  );
}
