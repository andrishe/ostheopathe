import { motion } from 'framer-motion';
import {
  SpadeIcon as Spine,
  Baby,
  MonitorIcon as Running,
  Brain,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Spine,
      title: 'Ostéopathie Structurelle',
      description:
        'Traitement des troubles musculo-squelettiques et articulaires par des techniques manuelles précises.',
    },
    {
      icon: Brain,
      title: 'Ostéopathie Crânienne',
      description:
        'Approche douce pour traiter les tensions crâniennes et les troubles associés.',
    },
    {
      icon: Baby,
      title: 'Ostéopathie Pédiatrique',
      description:
        'Soins adaptés aux nourrissons et aux enfants pour un développement harmonieux.',
    },
    {
      icon: Running,
      title: 'Ostéopathie Sportive',
      description:
        'Accompagnement des sportifs pour la prévention et le traitement des blessures.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Mes Services Spécialisés</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une approche globale et personnalisée pour répondre à vos besoins
            spécifiques
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white hover:shadow-xl transition-all"
            >
              <service.icon className="w-12 h-12 mb-4 text-pink-600" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
