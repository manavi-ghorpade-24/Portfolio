import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Sunnyvale, CA',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '530-591-5243',
      href: 'tel:5305915243',
    },
    {
      icon: HiMail,
      label: 'Email',
      value: 'manavi.u.ghorpade@gmail.com',
      href: 'mailto:manavi.u.ghorpade@gmail.com',
    },
  ];

  const socials = [
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/manavi_ghorpade/',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/manavi-ghorpade-31a0751a8/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/Manavi-ghorpade',
      label: 'GitHub',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-padding overflow-hidden"
      style={{
        backgroundImage: 'url(/img/overlay-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-center text-white/90 mb-16 max-w-2xl mx-auto">
            I will love to hear from you! If you have any questions, comments or feedback about my work, please don't hesitate to reach out to me.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/90">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="flex justify-center space-x-6">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12 text-white/80"
          >
            <p>&copy; {new Date().getFullYear()} Manavi Ghorpade. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
