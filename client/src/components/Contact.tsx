import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle, FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Use environment variable or fallback to deployed backend URL
      const API_URL = import.meta.env?.VITE_API_URL || 'https://ecommerce-7-z18z.onrender.com';
      await axios.post(`${API_URL}/api/contact`, formData);
      setStatus('success');
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setShowModal(false);
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setShowModal(true);
      
      setTimeout(() => {
        setShowModal(false);
        setStatus('idle');
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: '9, Shanti Nagar Rd, near Nagar Nigam Office, Damoh Naka, Transport Nagar, Jabalpur, MP 482002',
      link: 'https://www.google.com/maps/search/?api=1&query=9+Shanti+Nagar+Rd+near+nagar+nigam+office+Damoh+Naka+Transport+Nagar+Jabalpur+Madhya+Pradesh+482002'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'snehakoshta1@gmail.com',
      link: 'mailto:snehakoshta1@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+91 9340930825',
      link: 'tel:+919340930825'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-5 max-w-7xl mx-auto bg-primary relative" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.p
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind or want to collaborate? Feel free to reach out!
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={status === 'loading'}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-card border-2 border-white/5 rounded-xl text-white text-sm sm:text-base transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(0,217,255,0.2)] disabled:opacity-50"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={status === 'loading'}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-card border-2 border-white/5 rounded-xl text-white text-sm sm:text-base transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(0,217,255,0.2)] disabled:opacity-50"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={status === 'loading'}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-card border-2 border-white/5 rounded-xl text-white text-sm sm:text-base resize-y transition-all focus:outline-none focus:border-accent focus:shadow-[0_0_20px_rgba(0,217,255,0.2)] disabled:opacity-50"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-base sm:text-lg font-semibold rounded-full transition-all hover:shadow-[0_10px_30px_rgba(102,126,234,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={status !== 'loading' ? { scale: 1.05 } : {}}
              whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
            >
              {status === 'loading' ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-card border border-white/5 rounded-xl hover:border-accent/30 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl text-accent group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.details}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Google Map */}
          <motion.div
            className="rounded-xl overflow-hidden border border-white/5 h-[300px] relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0234567890123!2d79.9876543!3d23.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA3OcKwNTknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=9+Shanti+Nagar+Rd+near+nagar+nigam+office+Damoh+Naka+Transport+Nagar+Jabalpur+Madhya+Pradesh+482002"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="Location Map"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className={`bg-card border-2 ${
                status === 'success' ? 'border-green-500' : 'border-red-500'
              } rounded-3xl p-8 sm:p-12 max-w-md w-full text-center shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                {status === 'success' ? (
                  <FaCheckCircle className="text-7xl text-green-500 mx-auto" />
                ) : (
                  <FaTimesCircle className="text-7xl text-red-500 mx-auto" />
                )}
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
              >
                {status === 'success' ? 'Message Sent!' : 'Oops!'}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-base sm:text-lg mb-6"
              >
                {status === 'success'
                  ? 'Thank you for reaching out! I\'ll get back to you soon.'
                  : 'Something went wrong. Please try again later.'}
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowModal(false)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  status === 'success'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
