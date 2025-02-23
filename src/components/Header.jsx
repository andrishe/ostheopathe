import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white truncate">DR. MARTIN</h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Accueil', 'À propos', 'Services', 'Témoignages', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('à', 'a')}`}
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
              Prendre RDV
            </button>
          </nav>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center md:hidden">
          <nav className="space-y-6 text-center">
            {['Accueil', 'À propos', 'Services', 'Témoignages', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('à', 'a')}`}
                  className="text-white text-xl font-semibold hover:text-pink-400 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
              Prendre RDV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
