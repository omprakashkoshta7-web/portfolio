import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiPostgresql, SiMysql, SiNextdotjs, SiJavascript, SiPostman } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Engineering',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95 },
        { name: 'Redux Toolkit', icon: <SiRedux />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 88 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92 }
      ]
    },
    {
      title: 'Backend Engineering',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 93 },
        { name: 'Express.js', icon: <SiExpress />, level: 90 },
        { name: 'RESTful APIs', icon: <FaDatabase />, level: 95 },
        { name: 'Microservices', icon: <FaNodeJs />, level: 85 }
      ]
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 92 },
        { name: 'MySQL', icon: <SiMysql />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 83 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, level: 95 },
        { name: 'Docker', icon: <FaDocker />, level: 80 },
        { name: 'AWS', icon: <FaAws />, level: 75 },
        { name: 'Postman', icon: <SiPostman />, level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-5 max-w-7xl mx-auto bg-primary" ref={ref}>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center sm:text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="bg-card p-4 sm:p-6 rounded-2xl text-center border border-white/5 transition-all hover:border-accent hover:shadow-[0_10px_40px_rgba(0,217,255,0.2)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="text-4xl sm:text-5xl text-accent mb-3">{skill.icon}</div>
                  <h4 className="text-sm sm:text-base md:text-lg mb-3 text-white font-medium">{skill.name}</h4>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-2">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 + 0.5 }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 font-semibold">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
