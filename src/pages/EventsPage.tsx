import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';

const events = [
  {
    title: "Culto de Celebração",
    date: "Todos os Domingos",
    time: "09h00 e 18h00",
    location: "Auditório Principal",
    desc: "Um momento de louvor, adoração e palavra para toda a família.",
    image: "https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Culto de Oração e Ensino",
    date: "Todas as Quartas",
    time: "20h00",
    location: "Auditório Principal",
    desc: "Aprofundamento na palavra e busca intensa pela presença de Deus.",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Encontro de GCs",
    date: "Semanal",
    time: "Diversos Horários",
    location: "Casas e Cafés",
    desc: "Comunhão real e crescimento mútuo em pequenos grupos.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
  }
];

export default function EventsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossa Agenda</h1>
          <p className="text-gray-600 text-lg">
            Fique por dentro de tudo o que acontece na nossa comunidade. Você é nosso convidado especial.
          </p>
        </motion.div>

        <div className="space-y-12">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100`}
            >
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-widest">Destaque</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">{e.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{e.desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="flex items-center gap-3 text-gray-500">
                    <Calendar size={18} className="text-primary" />
                    <span>{e.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Clock size={18} className="text-primary" />
                    <span>{e.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 md:col-span-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{e.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
