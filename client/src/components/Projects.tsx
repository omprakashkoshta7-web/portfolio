import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showThankYou, setShowThankYou] = useState(false);
  const [clickedProject, setClickedProject] = useState('');

  const handleProjectClick = (projectTitle: string, url: string) => {
    setClickedProject(projectTitle);
    setShowThankYou(true);
    
    // Open link in new tab
    window.open(url, '_blank');
    
    // Auto close after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const projects = [
    {
      title: 'Food Saver Platform',
      subtitle: 'Real-Time Food Redistribution System',
      description: 'Designed and developed a scalable real-time food redistribution platform connecting donors and receivers based on location. Built responsive React interfaces with optimized state management for real-time updates.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Google Maps API'],
      github: 'https://github.com',
      live: 'https://sneha-beta-opal-43.vercel.app/',
      highlights: ['Real-time location tracking', 'Role-based access control', 'Secure authentication']
    },
    {
      title: 'FarmerTech AgroTech',
      subtitle: 'Crop Recommendation System',
      description: 'Built a data-driven crop recommendation system using machine learning models. Integrated real-time weather data through third-party APIs. Optimized backend workflows reducing response time by 30%.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
      technologies: ['Node.js', 'Python', 'Flask', 'MongoDB', 'ML', 'Weather APIs', 'React.js'],
      github: 'https://github.com',
      live: 'https://farmertech-appgnruezaaxdkztgs35vkfks.streamlit.app/',
      highlights: ['ML-based predictions', '30% faster response', 'Weather API integration']
    },
    {
      title: 'Recruitment Chatbot',
      subtitle: 'AI-Powered Hiring Assistant',
      description: 'Developed a Recruitment Chatbot to automate the hiring process by interacting with candidates, answering job-related queries, and collecting applicant details with job role-based screening.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
      technologies: ['Node.js', 'Python', 'Flask', 'MongoDB', 'Machine Learning', 'NLP'],
      github: 'https://github.com',
      live: 'https://hiring-assistant-appikheyef26y4nrufa5bgy.streamlit.app/',
      highlights: ['Automated screening', 'FAQ handling', 'Candidate data collection']
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-5 max-w-7xl mx-auto bg-secondary" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-card rounded-2xl overflow-hidden border border-white/5 transition-all hover:border-accent hover:shadow-[0_15px_50px_rgba(0,217,255,0.2)]"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-6 sm:gap-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-3xl sm:text-4xl text-white hover:text-accent transition-all bg-black/50 p-3 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.button
                  onClick={() => handleProjectClick(project.title, project.live)}
                  className="text-3xl sm:text-4xl text-white hover:text-accent transition-all bg-black/50 p-3 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt />
                </motion.button>
              </div>
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl mb-1 text-white font-bold">{project.title}</h3>
              <p className="text-accent text-sm sm:text-base mb-3 font-medium">{project.subtitle}</p>
              <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              
              {/* Highlights */}
              <div className="mb-4 space-y-1">
                {project.highlights.map((highlight, i) => (
                  <p key={i} className="text-xs sm:text-sm text-gray-500 flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    <span>{highlight}</span>
                  </p>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-purple-500/20 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Link Button */}
              <motion.button
                onClick={() => handleProjectClick(project.title, project.live)}
                className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaExternalLinkAlt className="text-sm" />
                View Live Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowThankYou(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-card border-2 border-purple-500 rounded-3xl p-8 sm:p-12 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                <FaCheckCircle className="text-7xl text-purple-500 mx-auto" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
              >
                Thank You! 🎉
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-base sm:text-lg mb-2"
              >
                Opening <span className="text-purple-400 font-semibold">{clickedProject}</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 text-sm"
              >
                Thanks for checking out my work!
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setShowThankYou(false)}
                className="mt-6 px-8 py-3 rounded-full font-semibold bg-purple-500 hover:bg-purple-600 text-white transition-all"
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

export default Projects;
