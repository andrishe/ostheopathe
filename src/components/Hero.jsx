import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import michImage from '../assets/mich.png';

const reviews = [
  'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden ">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 w-full h-full flex justify-center items-center"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Content */}
          <motion.div
            className="lg:w-1/2 text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 mt-32 ">
              Bonjour, je suis
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                Dr. Martin
              </span>
              <br />
              Ostéopathe D.O.
            </h1>
            <p className="text-lg text-indigo-100 max-w-xl mx-auto lg:mx-0 mb-8">
              Spécialisé dans le traitement des troubles fonctionnels du corps
              par des techniques manuelles douces et précises.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <motion.button
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="mr-2 h-5 w-5" /> Prendre RDV
              </motion.button>

              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {reviews.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Patient ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                  ))}
                </div>
                <div className="text-indigo-100">
                  <span className="font-bold text-white">500+</span> Patients
                  Satisfaits
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative ">
              <img
                src={michImage}
                alt="Ostéopathe en consultation"
                className="w-full max-w-lg mx-auto rounded-2xl absolute -top-96
                 "
              />
              <motion.div
                className="absolute top-64 -right-24 bg-white rounded-2xl px-6 py-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <span className="text-pink-600 font-bold text-2xl">
                  15+ ans
                </span>
                <span className="text-gray-600 block"> d&apos;expérience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
