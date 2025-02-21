import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact & Rendez-vous
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Adresse du Cabinet</h3>
                <p className="text-gray-600">
                  123 Avenue de la Santé
                  <br />
                  68000 Colmar
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Téléphone</h3>
                <p className="text-gray-600">03 89 45 67 89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contact@osteopathe-paris.fr</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">
                  Horaires d&apos;ouverture
                </h3>
                <p className="text-gray-600">
                  Lundi - Vendredi : 9h00 - 19h00
                  <br />
                  Samedi : 9h00 - 12h00
                  <br />
                  Dimanche : Fermé
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-pink-500 rounded-lg focus:ring-2 focus:ring-pink-600 focus:border-transparent"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Envoyer
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
