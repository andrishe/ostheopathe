import { motion } from 'framer-motion';
import mich2Image from '../assets/mich2.png';

const About = () => {
  return (
    <section
      id="à-propos"
      className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À Propos
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center ">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={mich2Image}
              alt="Dr. Nom Prénom"
              className="rounded-full w-64 h-64 mx-auto shadow-lg bg-white"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-4 text-indigo-100">
              Diplômé de l&apos;Institut d&apos;Ostéopathie de Colmar, je me
              consacre depuis plus de 15 ans à améliorer la santé et le
              bien-être de mes patients grâce à une approche holistique de
              l&apos;ostéopathie.
            </p>
            <p className="text-lg mb-4 text-indigo-100">
              Ma pratique se concentre sur le traitement des troubles
              fonctionnels du corps humain, en utilisant des techniques
              manuelles douces et précises pour restaurer l&apos;équilibre et
              favoriser l&apos;auto-guérison.
            </p>
            <p className="text-lg text-indigo-100">
              Je m&apos;engage à rester à la pointe des avancées dans le domaine
              de l&apos;ostéopathie, en suivant régulièrement des formations
              continues pour vous offrir les meilleurs soins possibles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
