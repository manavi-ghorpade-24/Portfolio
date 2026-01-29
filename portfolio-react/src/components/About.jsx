import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'C++', level: 95, color: 'bg-green-500' },
    { name: 'Python', level: 95, color: 'bg-blue-500' },
    { name: 'Java', level: 90, color: 'bg-yellow-500' },
    { name: 'Machine Learning and Data Analysis', level: 90, color: 'bg-red-500' },
    { name: 'Full-stack Development', level: 90, color: 'bg-green-500' },
    { name: 'AWS', level: 90, color: 'bg-blue-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image and Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <img
                  src="/img/IMG_7770.jpeg"
                  alt="Manavi Ghorpade"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-3">
                <InfoItem label="Name" value="Manavi Uttam Ghorpade" />
                <InfoItem label="Profile" value="Software Developer" />
                <InfoItem label="Email" value="manavi.u.ghorpade@gmail.com" />
                <InfoItem label="Phone" value="530-591-5243" />
                <InfoItem label="Degree" value="M.S. in Computer Science" />
              </div>
            </motion.div>

            {/* Right Column - Bio and Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hey there! Welcome to my little corner of the internet. I'm a proud Computer Science graduate from California State University, Chico. I've got a solid grip on Data Structures and Algorithms, and I love tackling problems with a creative twist. Whether it's cracking a complex algorithm or solving a brain-busting puzzle, I live for that "Eureka!" moment.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm fluent in C++, Java & Python.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">When I'm not lost in code:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Mountains are my playground:</strong> I love hiking and finding new trails.</li>
                    <li><strong>Dance like nobody's watching:</strong> Seriously, I've got moves.</li>
                    <li><strong>Furry friends:</strong> Volunteering at the local animal shelter is my happy place.</li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} delay={index * 0.1} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Publications */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Publications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <PublicationCard
                title="Diabetes Detection System"
                link="https://drive.google.com/file/d/1fXTJ9Tna1_NqO3hJ5v2nVvtSry0n99-k/view"
                stats={{
                  impact: '3.3',
                  citations: '120',
                  views: '4500',
                  downloads: '1300',
                }}
              />
              <PublicationCard
                title="A Doctor's Appointment Booking System using Recommendation Model"
                link="https://www.ijcseonline.org/pdf_paper_view.php?paper_id=5280&11-IJCSE-08441.pdf%20"
                stats={{
                  impact: '3.8',
                  citations: '200',
                  views: '6000',
                  downloads: '1500',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex flex-wrap">
    <span className="font-bold text-gray-900 dark:text-white mr-2">{label}:</span>
    <span className="text-gray-700 dark:text-gray-300">{value}</span>
  </div>
);

const SkillBar = ({ skill, delay }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1, delay }}
        className={`h-2.5 ${skill.color} rounded-full`}
      />
    </div>
  </div>
);

const PublicationCard = ({ title, link, stats }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
  >
    <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{title}</h4>
    <div className="grid grid-cols-2 gap-3 text-sm">
      <div>
        <span className="font-semibold">Impact Factor:</span> {stats.impact}
      </div>
      <div>
        <span className="font-semibold">Citations:</span> {stats.citations}
      </div>
      <div>
        <span className="font-semibold">Views:</span> {stats.views}
      </div>
      <div>
        <span className="font-semibold">Downloads:</span> {stats.downloads}
      </div>
    </div>
  </a>
);

export default About;
