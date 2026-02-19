import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { useState } from 'react';

const Hero = () => {
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);

  const handleResumeDownload = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/Document from sneha.pdf'; // File in public folder
    link.download = 'Sneha_Koshta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    setShowDownloadSuccess(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      setShowDownloadSuccess(false);
    }, 3000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      <div className="text-center z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <HiSparkles className="text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Available for opportunities</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-gradient">Sneha Koshta</span>
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-accent font-semibold">
                Senior MERN Stack Engineer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-purple-400 font-medium mt-1">
                React Native Full Stack Developer
              </p>
            </div>
            <div className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            1+ years of experience architecting <span className="text-white font-semibold">scalable, high-performance</span> web applications. 
            Specialized in React.js, Node.js, Express.js, and MongoDB with proven expertise in 
            building secure RESTful APIs and optimizing application performance.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.button 
              className="group px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            
            <motion.button 
              className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full bg-transparent border-2 border-accent text-accent transition-all hover:bg-accent hover:text-black hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>

            <motion.button 
              className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 backdrop-blur-sm flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
            >
              <FaDownload />
              Resume
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex gap-6 justify-center text-3xl sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              className="text-gray-400 hover:text-accent transition-all p-3 rounded-full hover:bg-accent/10" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              className="text-gray-400 hover:text-accent transition-all p-3 rounded-full hover:bg-accent/10" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              className="text-gray-400 hover:text-accent transition-all p-3 rounded-full hover:bg-accent/10" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-purple-500 to-purple-700 top-[-200px] sm:top-[-300px] left-[-150px] sm:left-[-300px] animate-float" />
        <div className="absolute w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-accent to-accent-hover bottom-[-150px] sm:bottom-[-250px] right-[-100px] sm:right-[-250px] animate-float [animation-delay:-10s]" />
        <div className="absolute w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full blur-[100px] opacity-10 bg-gradient-to-br from-pink-500 to-purple-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float [animation-delay:-5s]" />
      </div>

      {/* Download Success Modal */}
      <AnimatePresence>
        {showDownloadSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDownloadSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-card border-2 border-green-500 rounded-3xl p-8 sm:p-12 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                <FaCheckCircle className="text-7xl text-green-500 mx-auto" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
              >
                Resume Downloaded! 📄
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-base sm:text-lg mb-2"
              >
                Thank you for downloading my resume!
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 text-sm"
              >
                Looking forward to connecting with you.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setShowDownloadSuccess(false)}
                className="mt-6 px-8 py-3 rounded-full font-semibold bg-green-500 hover:bg-green-600 text-white transition-all"
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

export default Hero;
