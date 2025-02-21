import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marie L.',
      text: 'Grâce au Dr. Martin, mes douleurs chroniques ont considérablement diminué. Son approche est à la fois professionnelle et bienveillante.',
      rating: 5,
    },
    {
      name: 'Thomas R.',
      text: 'En tant que sportif, je recommande vivement le Dr. Martin. Son expertise en ostéopathie sportive a été cruciale pour ma récupération.',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      text: "Un ostéopathe exceptionnel qui prend le temps d'écouter et d'expliquer. Mon bébé a retrouvé un sommeil paisible après la consultation.",
      rating: 5,
    },
  ];

  return (
    <section
      id="temoignages"
      className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Avis de Mes Patients
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="text-pink-600 font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
