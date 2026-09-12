import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/helpers';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Membership', path: '/membership' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const moreLinks = [
  { name: 'Transformations', path: '/transformations' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Offers', path: '/offers' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Consultation', path: '/consultation' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setShowMore(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <Dumbbell size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-wider">
                  IRON<span className="text-red-500">PEAK</span>
                </h1>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase">Fitness Studio</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    location.pathname === link.path
                      ? 'text-red-500 bg-red-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  More ▾
                </button>
                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {moreLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={cn(
                            'block px-4 py-3 text-sm transition-colors',
                            location.pathname === link.path
                              ? 'text-red-500 bg-red-500/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919100527275"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <Link
                to="/membership"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0f0f0f] pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <nav className="space-y-1">
              {[...navLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                    location.pathname === link.path
                      ? 'text-red-500 bg-red-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+919100527275"
                className="flex items-center justify-center gap-2 w-full bg-white/5 text-white py-3 rounded-lg font-medium"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/919100527275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <Link
                to="/membership"
                className="block text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
