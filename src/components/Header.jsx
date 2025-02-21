import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#8822f9]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Cabinet d&apos;Ostéopathie
          </motion.h1>
          <nav className="hidden md:flex items-center space-x-8">
            {['Accueil', 'À propos', 'Services', 'Témoignages', 'Contact'].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace('à', 'a')}`}
                  className="text-white hover:text-pink-400 transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              )
            )}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full"
            >
              Prendre RDV
            </motion.button>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-transparent p-4 backdrop-blur-md"
        >
          <div className="flex flex-col space-y-4">
            {['Accueil', 'À propos', 'Services', 'Témoignages', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('à', 'a')}`}
                  className="text-white hover:text-pink-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
              Prendre RDV
            </button>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
