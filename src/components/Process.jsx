import { motion } from 'framer-motion';
import { ClipboardCheck, Stethoscope, Heart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Bilan Initial',
      description:
        'Évaluation complète de votre état de santé et de vos besoins',
    },
    {
      icon: Stethoscope,
      title: 'Traitement Adapté',
      description:
        'Techniques ostéopathiques personnalisées selon votre situation',
    },
    {
      icon: Heart,
      title: 'Suivi & Prévention',
      description:
        'Conseils et exercices pour maintenir les bénéfices du traitement',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Ma Méthode de Travail
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-pink-200" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
