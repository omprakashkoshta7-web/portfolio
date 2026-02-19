import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const experiences = [
    {
      title: 'MERN Stack Developer',
      company: 'ADRS Technosoft Pvt. Ltd.',
      period: '06/2023 – Present',
      location: 'Jabalpur, MP',
      points: [
        'Designed and delivered multiple enterprise-grade MERN applications',
        'Led frontend architecture using React, Redux Toolkit',
        'Improved application performance by 40% through optimization',
        'Integrated third-party services and conducted code reviews'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Skill Enhanced',
      period: '03/2019 – 06/2021',
      location: 'Remote',
      points: [
        'Developed responsive, production-ready React applications',
        'Reduced API latency by 30% through query optimization',
        'Implemented authentication and role-based access control'
      ]
    },
    {
      title: 'Junior Full Stack Developer',
      company: 'Freelance',
      period: '08/2021 – 01/2022',
      location: 'Remote',
      points: [
        'Built full-stack web solutions for early-stage startups',
        'Gained hands-on exposure to end-to-end product development'
      ]
    }
  ];

  const achievements = [
    { icon: '🏆', text: 'Winner - College Hackathon (1st Prize)' },
    { icon: '🥇', text: 'Gold Badge in SQL - HackerRank' },
    { icon: '💻', text: 'Solved 350+ DSA problems on LeetCode' },
    { icon: '📜', text: 'BSNL & Nokia Industrial Training (4G/5G)' },
    { icon: '🔐', text: 'Cisco CCNA - Cybersecurity' },
    { icon: '🤖', text: 'ML Research - ISRO, Infosys, DRDO' }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-5 max-w-7xl mx-auto bg-secondary relative overflow-hidden" ref={ref}>
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Passionate about building scalable applications and solving complex problems
        </motion.p>

        {/* Enhanced Summary Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-purple-900/20 via-card to-accent/10 p-8 sm:p-10 rounded-3xl border border-purple-500/20 backdrop-blur-sm overflow-hidden group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <HiSparkles className="text-3xl text-purple-400 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Professional Summary
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Senior MERN Stack Engineer with <span className="text-accent font-bold">1+ years of experience</span> in architecting, 
                developing, and deploying scalable, high-performance web applications. Strong expertise in <span className="text-purple-400 font-semibold">React.js, Node.js, Express.js, 
                and MongoDB</span> for end-to-end full-stack development. Proven ability to design clean, modular, and maintainable architectures 
                following industry best practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Experience Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-xl">
              <FaBriefcase className="text-2xl text-accent" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Work Experience
            </h3>
          </div>
          <div className="relative space-y-8 pl-8 border-l-2 border-purple-500/30">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-card to-card/50 p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {/* Enhanced Timeline dot */}
                <div className="absolute -left-[45px] top-8 w-7 h-7 bg-gradient-to-br from-accent to-purple-500 rounded-full border-4 border-secondary group-hover:scale-150 group-hover:rotate-180 transition-all duration-300 shadow-lg shadow-accent/50" />
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{exp.title}</h4>
                    <p className="text-accent font-semibold text-base sm:text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="flex items-center gap-2 text-sm text-gray-400 bg-purple-500/10 px-3 py-1.5 rounded-full">
                      <FaCalendarAlt className="text-purple-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-400 bg-accent/10 px-3 py-1.5 rounded-full">
                      <FaMapMarkerAlt className="text-accent" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 ml-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm sm:text-base text-gray-400 flex items-start gap-3 group/item hover:text-gray-300 transition-colors">
                      <span className="text-accent mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Education */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-accent/20 rounded-xl">
              <FaGraduationCap className="text-2xl text-purple-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Education
            </h3>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 via-card to-accent/10 p-6 sm:p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-accent/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaGraduationCap className="text-4xl text-purple-400 group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  B.Tech in Computer Science Engineering
                </h4>
                <p className="text-accent font-semibold text-base sm:text-lg mb-3">Shri Ram Institute of Science and Technology</p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full hover:bg-purple-500/20 transition-colors">
                    <FaCalendarAlt className="text-purple-400" />
                    2022 – 2026
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full font-bold border border-green-500/30 hover:scale-105 transition-transform">
                    CGPA: 8.7/10
                  </span>
                </div>
                <div className="space-y-2 text-sm bg-secondary/50 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Senior Secondary (XII), MP Board – <span className="text-white font-bold ml-1">88%</span>
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Secondary (X), MP Board – <span className="text-white font-bold ml-1">90%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-xl">
              <FaAward className="text-2xl text-accent" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Achievements & Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-card to-card/50 p-5 rounded-2xl border border-white/10 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-accent/20 rounded-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-3xl">{achievement.icon}</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors flex-1">
                    {achievement.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
