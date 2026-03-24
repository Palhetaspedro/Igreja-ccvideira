import { motion } from 'motion/react';
import { Users, Music, Baby, BookOpen, Coffee } from 'lucide-react';

const ministries = [
  {
    title: "GCs - Grupos de Comunhão",
    icon: <Users className="w-8 h-8" />,
    desc: "Pequenos grupos que se reúnem em casas para comunhão, estudo bíblico e apoio mútuo. É o coração da nossa igreja.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Louvor e Adoração",
    icon: <Music className="w-8 h-8" />,
    desc: "Ministério dedicado a conduzir a igreja em momentos de adoração profunda através da música.",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a7439?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kids & Teens",
    icon: <Baby className="w-8 h-8" />,
    desc: "Um ambiente seguro e divertido onde crianças e adolescentes aprendem sobre o amor de Deus.",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ensino Bíblico",
    icon: <BookOpen className="w-8 h-8" />,
    desc: "Cursos e seminários focados no aprofundamento do conhecimento das Escrituras.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Acolhimento",
    icon: <Coffee className="w-8 h-8" />,
    desc: "Nossa equipe de recepção, pronta para fazer cada visitante se sentir em casa desde o estacionamento.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
  }
];

export default function MinistriesPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Ministérios</h1>
          <p className="text-gray-600 text-lg">
            Existem diversas formas de se conectar e servir na CCVideira. Encontre o lugar onde seus dons podem florescer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="text-primary mb-4">{m.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {m.desc}
                </p>
                <button className="text-primary font-bold text-sm hover:underline">
                  Quero participar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
