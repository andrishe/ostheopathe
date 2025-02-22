import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            &copy; 2025 Sima Creation web Tous droits réservés.
          </motion.p>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              className="hover:text-pink-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              Mentions légales
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-pink-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              Politique de confidentialité
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
