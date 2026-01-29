import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Advanced Driver Assistance System (ADAS)',
      tech: 'C++, Python, OpenCV, Nvidia Jetson Nano',
      image: '/img/vid.gif',
      description: [
        'Generated multicore embedded system using Nvidia jetson Nano 2g developer kit',
        'System assists drivers in the lane, traffic light, stop-sign, and pedestrian detection',
        'Successfully implemented AMP (Asymmetric multiprocessing) and SMP (Symmetric multiprocessing) using C++ and OpenCV which improved performance by 100% and obtained an average of 40 FPS',
        'Used HOG Descriptor, SVM model, ROI, Masking, Regression, Edge detection, Slope calculations, and Image preprocessing to improve driver safety and obtained an F-measure of 0.96',
      ],
      github: 'https://github.com/Manavi-ghorpade/ADAS-Final-project-/tree/master',
    },
    {
      title: 'Food Pantry Management Application',
      tech: 'Automated testing, Jest, PostgreSQL, React, Docker, Agile methodologies, Git, CI/CD, TypeScript',
      image: '/img/food.gif',
      description: [
        'Updated food pantry management project (NodeJS to React and MongoDB to PostgreSQL) with Docker and automated testing',
        'Implemented a process to approve each backlogged Dependabot PR independently to ensure updates don\'t cause regression or other issues',
        'Added CI workflow for testing all pull requests and main branch with coverage reports and status badges to ensure continuous integration and delivery',
        'Led the creation and execution of comprehensive test plans, resulting in a reduction in bugs by 40% and an overall improvement in product quality',
      ],
      github: 'https://github.com/ChicoState/PantryNode',
    },
    {
      title: 'Inventory Management System for Home',
      tech: 'MongoDB, React, NodeJS, Express, Django, Python, GCS, AWS',
      image: '/img/inventory.png',
      description: [
        'Full-stack web development using two stacks: MongoDB/React/NodeJS/Express, Django/Python',
        'Cloud providers used: GCS and AWS',
        'Deployed each stack within Docker images and provided a load balancer on the back-end',
        'Differentiated performance and accessibility by working on both stacks individually',
        'Developed CI/CD pipelines to automate the software delivery process and ensure seamless integration of code changes',
      ],
      github: 'https://github.com/Manavi-ghorpade/InventoryManagement_Website',
    },
    {
      title: 'Gold Chase Game',
      tech: 'C++, Python, OpenCV, Multithreading (Pthread), Makefile, Embedded Systems, Computer Vision',
      image: '/img/miner.gif',
      description: [
        'Created multiplayer console game application using C++, vagrant, distributed programming, signals, pipes',
        'Implemented semaphores for synchronization, shared memory to coordinate multiple processes, Signal handling, and message queues for automatic screen updates and chat functionality',
        'Aiming to complete the project within 4 weeks and reduced the deployment time by 50%',
      ],
      github: 'https://github.com/Manavi-ghorpade/gold/tree/main',
    },
    {
      title: 'E-commerce Application for Online Shopping',
      tech: 'HTML, CSS, JavaScript, Django, Python, AWS',
      image: '/img/ecom.gif',
      description: [
        'Designed and implemented a user-friendly e-commerce interface using HTML, CSS, and JavaScript',
        'Created back-end functionality for user authentication, product management, and order processing using Django and Python',
        'Integrated payment gateway APIs like Razorpay for secure online transactions',
        'Deployed the application on AWS, conducted testing and debugging, and collaborated with team members for project progress updates',
      ],
      github: 'https://github.com/Manavi-ghorpade/E-commerce-Website',
    },
    {
      title: 'Fake News Detection using NLP',
      tech: 'Natural Language Processing (NLP), Scikit-learn, Python, NumPy, Pandas, Matplotlib, Scatterplots, Data Preprocessing',
      image: '/img/fake.png',
      description: [
        'Developed a set of prediction models with python using classification algorithms like passive aggressive, gradient boost, logistic regression, and support vector',
        'Utilized vectorization for textual data which increased the computational speed and achieved an accuracy of all models above 94%',
        'Performed data visualization using seaborn, matplotlib, scatterplots',
      ],
      github: 'https://github.com/Manavi-ghorpade/Fake-news-detection-with-semantic-model',
    },
    {
      title: 'Social Media Website',
      tech: 'MongoDB, React, NodeJS, Express, Bootstrap, Django/Python, AWS, GCP, SQL',
      image: '/img/insta.gif',
      description: [
        'Constructed a social media web application using MongoDB, React, NodeJS, Express, Bootstrap, and Django/Python',
        'Hosted and deployed the application on cloud providers like GCS and AWS, ensuring high availability and scalability for worldwide users',
        'Built RESTful APIs to enable seamless communication and data management between the client-side and server-side components',
        'Migrated database from SQLite to SQL to enhance performance and scalability without impacting user experience',
        'Troubleshot end-user issues and led technology projects to enhance web application workflows and meet functional requirements and strategic goals',
      ],
      github: 'https://github.com/Manavi-ghorpade/SocialMedia_Website',
    },
    {
      title: 'Chess Game',
      tech: 'HTML, CSS, JavaScript, Django, Python',
      image: '/img/chess.gif',
      description: [
        'Generated a Chess game web application using Python and Django framework',
        'Utilized HTML, CSS, and JavaScript to create an intuitive and visually appealing user interface',
        'Implemented Chess movement functionality using Django Forms and Models, with form validation that reports errors to the user',
        'Created a per-user board model, allowing each logged-in user to play a game independently, saving their progress in the database',
        'Conducted thorough research on user needs and preferences, resulting in a user-friendly interface and a 20% increase in user engagement',
      ],
      github: 'https://github.com/Manavi-ghorpade/chessboard-game-website',
    },
    {
      title: 'Organizer Website',
      tech: 'HTML, CSS, JavaScript, Bootstrap, GCP, Django, Python',
      image: '/img/task.png',
      description: [
        'Implemented a full-stack web service using HTML, CSS, JavaScript, Bootstrap, Django, and Python',
        'Formulated a personal to-do list feature (Tasks) and expense tracker feature (Budget) with add, edit, delete, and toggle completed state functionalities',
        'Utilized chartist.js library to create pie charts and bar charts to display summarized data',
        'Deployed Dockerized applications to Google Cloud Platform for remote accessibility',
      ],
      github: 'https://github.com/Manavi-ghorpade/Organizer-web-service',
    },
    {
      title: 'Custom kNN Algorithm',
      tech: 'Python, seaborn, matplotlib, scatterplots',
      image: null,
      description: [
        'Built custom kNN algorithm from scratch in Python without using any external ML libraries',
        'Tested kNN on classifier and regressor datasets (Sklearn) and acquired 95% accuracy',
        'Achieved 100% efficiency as that of Sklearn\'s kNN and visualized the results with matplotlib, seaborn, and scatterplots',
      ],
      github: 'https://github.com/Manavi-ghorpade/Build-Knn',
    },
    {
      title: 'Maximum Flow in the Network',
      tech: 'C++, Java, Python',
      image: '/img/max.gif',
      description: [
        'Analysed and implemented the Edmonds-Karp algorithm, Dinic\'s algorithm, and Push-relabel algorithm using highly optimized C++, Java and Python code',
        'Performed and compared asymptotic analysis of the algorithm\'s run time',
        'Generated test cases using real-world and synthetic data of different sizes and different complexity',
      ],
      github: 'https://github.com/Manavi-ghorpade/Maximum-flow-algorithms-',
    },
    {
      title: 'Netflix Data Analysis Dashboard',
      tech: 'BeautifulSoup, Python, Tableau',
      image: '/img/Netflix.png',
      description: [
        'Visualized Netflix\'s content library, offering insights into movies and TV shows available on the platform',
        'Created an interactive Tableau dashboard for analysis of content distribution by country, ratings, genres, and more',
      ],
      github: 'https://github.com/Manavi-ghorpade/Netflix_DataAnalysis_Tableau',
    },
    {
      title: 'Video Game Sales Analysis',
      tech: 'BeautifulSoup, Python, Tableau, Scikit-learn, PyTorch, Keras, Pandas, NumPy',
      image: '/img/Dashboard.png',
      description: [
        'Utilized BeautifulSoup for web scraping, compiling a high-quality dataset of over 100,000 data points with 99% data integrity',
        'Created an interactive Tableau dashboard for real-time sales trend exploration, boosting decision-making efficiency by 75%',
        'Developed machine learning models (RNN, Random Forest, LSTM) in Python, with LSTM achieving RMSE of 0.05 and R2 score of 0.98',
      ],
      github: 'https://github.com/Manavi-ghorpade/Sales_dashboard',
    },
    {
      title: 'Diabetes Detection System',
      tech: 'Python, Swift, XCode',
      image: null,
      description: [
        'Worked in a team to develop Android and iOS applications for the detection of blood sugar levels (diabetes) by scanning the human retinal image',
        'Developed image recognition model using Python (Sklearn) for android application and Swift, XCode for iOS application',
        'Trained model by providing own dataset and improved accuracy to 99%',
      ],
      github: null,
    },
  ];

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col"
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.tech}</p>

        <div className={`space-y-2 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {project.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mb-4"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <HiExternalLink className="w-5 h-5" />
            GitHub Repository
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
