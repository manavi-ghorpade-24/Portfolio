import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timelineData = [
    {
      year: 1999,
      title: "Manavi Ghorpade",
      image: "/img/IMG_7770.jpeg",
      description: "An engineer, an entrepreneur, and a visionary with a long-term perspective. I love building products that spark curiosity in users, and I've been fortunate to do exactly that alongside amazing teams throughout my career. My journey began with a fascination for living beings and science, deeply inspired by my parents who dedicated 25 years to serving in the medical field.",
    },
    {
      year: 2003,
      title: "When Bollywood Came Calling",
      image: "/img/IMG_7770.jpeg",
      description: "Dance consumed my childhood. By age 4, I was competing nationally and appearing on TV shows like \"Dum Dama Dum.\" The pinnacle? Dancing with Shah Rukh Khan in \"Yeh Tara Woh Tara in movie Swades\" – he'd bring me chocolates and lift me in his arms during performances. But when Bollywood offers came, something felt off. I chose classical dance instead – my first lesson in following intuition over opportunity.",
    },
    {
      year: 2015,
      title: "Small Town, Big Lessons",
      image: "/img/IMG_7770.jpeg",
      description: "High school in a small town – riding my pink bicycle to school, friends who felt like family, and daily temple visits before class. Spirituality was part of my routine, not a choice. A professor's words became my mantra: \"F.A.I.L means First Attempt In Learning.\" The irony? I despised math but scored highest in it. Some mysteries remain unsolved.",
    },
    {
      year: 2016,
      title: "When Loss Rewrote My Future",
      image: "/img/IMG_7770.jpeg",
      description: "I lost my father in an accident – he was rushing to save a patient's life. In that moment, my dream of becoming a doctor died with him. If someone had told me then that this tragedy would eventually lead me to engineering, to building products, to finding my true purpose, I wouldn't have believed them. I chose Computer Science because everyone said it had \"scope.\" No passion, no calling – just pragmatism in the face of grief. But life has a way of making sense in retrospect.",
    },
    // Add more years as needed
    {
      year: 2018,
      title: "When I Almost Gave Up",
      image: "/img/IMG_7770.jpeg",
      description: "Let's be honest – I hated coding. Failed my programming exams. Watched classmates breeze through assignments while I struggled with basic concepts. But I made a choice: if I was going to do this, I was going to understand it. Day and night, I studied. Not just \"how\" but \"why.\" Every concept, every line of code – I questioned everything until it clicked. I wasn't the natural. I was the one who had to fight for every bit of knowledge. Turns out, that's exactly what I needed.",
    },
    {
      year: 2020,
      title: "The Graduation That Changed Everything",
      image: "/img/IMG_7770.jpeg",
      description: "Four years. One degree. But more importantly: 20+ competitions led, countless teams built, and friends for life. What I Learned: I didn't fall in love with engineering in the classroom – I fell in love with it through doing. My strength wasn't individual brilliance; it was bringing people together. Talking to people, working in teams, organizing events – that's where I belonged. The girl who hated coding and failed exams? She found her purpose not in spite of engineering, but through the parts of it that involve people, creativity, and building together. To my teachers and friends: thank you for helping me become who I am. This \"forced choice\" turned out to be exactly where I needed to be.",
    },
    {
      year: 2021,
      title: "The Pandemic Question",
      image: "/img/IMG_7770.jpeg",
      description: "COVID lockdown. The world in chaos. Me questioning: Am I solving actual problems? My mother risked her life daily treating COVID patients. Watching her taught me what real impact looks like. My answer: Enrolled in MS Computer Science at CSU, Chico. Goal: Learn AI because it was my fav subject. Use it to solve real problems.",
    },
    {
      year: 2023,
      title: "From Small Town Girl to Master's Graduate",
      image: "/img/IMG_7770.jpeg",
      description: "Graduated from Chico State with my MS in Computer Science. The Reality Behind the Achievement: A girl from a small Indian town, navigating America alone. My mom earning barely enough for herself. Me learning independence, self-sufficiency, and courage the hard way. The Lessons: Every problem has a solution – be patient. Never doubt your hard work. Keep building, even when it's hard. Built websites, apps, driving assistant systems. Each project was proof I belonged here. The dream came true, but not without the struggle that made it meaningful.",
    },
    {
      year: 2024,
      title: "Finding My Calling",
      image: "/img/IMG_7770.jpeg",
      description: "Collaborated with my professor on LLMs as GPT launched. Built a chat app centralizing all university information for students. Researched fine-tuning offline models and whether SLMs could replace LLMs for specific tasks. Then found my calling: Started at Curiouser.ai. Their vision – question everything, empower thinking – was exactly what I'd been searching for. Building products that spark curiosity, with a team that values the power of questions. Finally, everything made sense.",
    },
    {
      year: 2025,
      title: "When the Vision Became Crystal Clear",
      image: "/img/IMG_7770.jpeg",
      description: "The Real Problem with AI: Millions laid off. Companies racing to automate. Everyone celebrating efficiency – no one asking about commoditization. The Realization: We're building the wrong thing. Instead of just automating jobs away, what if we empower displaced workers to become founders? The Solution: Alice – Your AI co-founder. Discuss ideas, think through problems. Launched successfully. My Belief: If layoffs continue, everyone can become an entrepreneur. But here's what matters: We cannot replace thinking with AI. AI should empower thinking, not eliminate it. Ask better questions, not just give answers. Make people curious, not dependent. The future needs more thinkers, not more automation.",
    },
    {
      year: 2026,
      title: "The Next Chapter",
      image: "/img/IMG_7770.jpeg",
      description: "Alice Create – Helps anyone become a creator through personalized, Socratic AI. Launching in March. The future is not about replacing people with AI, but empowering every person to create, think, and build. This is just the beginning.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : prev));
  };

  const currentItem = timelineData[currentIndex];

  return (
    <section id="timeline" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          My Journey
        </motion.h2>

        {/* Timeline Progress Bar */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Bar */}
            <div className="relative w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentIndex / (timelineData.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Year Markers */}
            <div className="relative flex justify-between">
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center" style={{ position: 'absolute', left: `${(index / (timelineData.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}>
                  {/* Dot */}
                  <button
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 -mt-3 mb-2 ${
                      index === currentIndex
                        ? 'bg-blue-600 scale-150 ring-4 ring-blue-200 dark:ring-blue-900'
                        : index < currentIndex
                        ? 'bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to year ${item.year}`}
                  />
                  {/* Year Label */}
                  <span className={`text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                    index === currentIndex
                      ? 'text-blue-600 dark:text-blue-400 scale-110 font-bold'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Left Arrow on Card */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              currentIndex === 0
                ? 'bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-110'
            }`}
            aria-label="Previous"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow on Card */}
          <button
            onClick={handleNext}
            disabled={currentIndex === timelineData.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
              currentIndex === timelineData.length - 1
                ? 'bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-110'
            }`}
            aria-label="Next"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Image Section */}
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <img
                      src={currentItem.image}
                      alt={currentItem.title}
                      className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                    />
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
                      <span className="text-2xl font-bold">{currentItem.year}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                  >
                    {currentItem.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {currentItem.description}
                  </motion.p>

                  {/* Year Display */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-sm text-gray-500 dark:text-gray-400"
                  >
                    {currentIndex + 1} of {timelineData.length}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
