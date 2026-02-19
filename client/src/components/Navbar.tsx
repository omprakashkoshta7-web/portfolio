import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const menuItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <motion.nav 
      className={`fixed top-0 w-full py-4 z-[1000] transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
        >
          <span className="relative">
            SK
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 list-none">
          {menuItems.map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 text-white/80 font-medium cursor-pointer transition-all hover:text-white rounded-lg hover:bg-white/5 relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all group-hover:w-3/4" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white text-2xl z-50 p-2 rounded-lg hover:bg-white/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-screen bg-primary/95 backdrop-blur-2xl md:hidden flex items-center justify-center border-l border-white/10"
            >
              <ul className="flex flex-col gap-6 text-center">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      onClick={() => scrollToSection(item)}
                      className="text-white text-3xl font-semibold cursor-pointer hover:text-accent transition-colors block py-3 px-6 rounded-xl hover:bg-white/5"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
