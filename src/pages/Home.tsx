import { motion } from 'motion/react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000"
            alt="Church Interior"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-widest mb-6">
              Seja Bem-vindo
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Um lugar de <span className="italic font-serif text-accent">comunhão</span> e família.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
              Descubra uma comunidade que acolhe, ensina e vive o amor de Cristo em Águas Claras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
              >
                Visite-nos Hoje <ArrowRight size={18} />
              </Link>
              <Link
                to="/sobre"
                className="border border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Nossa História
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
          {[
            {
              icon: <Calendar className="text-accent" />,
              title: "Cultos Semanais",
              desc: "Quartas às 20h e Domingos às 09h e 18h.",
              link: "/eventos"
            },
            {
              icon: <MapPin className="text-accent" />,
              title: "Localização",
              desc: "Taguatinga, Brasília - DF. Fácil acesso.",
              link: "/contato"
            },
            {
              icon: <Church className="text-accent" />,
              title: "GCs",
              desc: "Grupos de Comunhão em toda a cidade.",
              link: "/ministerios"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{item.desc}</p>
              <Link to={item.link} className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Saiba mais <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Nossa missão é promover a <span className="text-primary italic">comunhão com Deus</span>.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Na CCVideira Águas Claras, acreditamos que a igreja é mais do que um prédio; é uma família. Nosso foco é o acolhimento familiar e o crescimento espiritual de cada membro.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">4.9</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Nota no Google</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">134+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Avaliações</p>
              </div>
            </div>
            <Link
              to="/sobre"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Conheça Nossa Visão
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
                alt="Community Gathering"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-lg font-serif italic">"Um lugar onde me senti em casa desde o primeiro dia."</p>
              <p className="text-xs mt-4 font-bold uppercase tracking-widest">- Membro da Comunidade</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O que dizem sobre nós</h2>
          <p className="text-gray-300">Experiências reais de quem faz parte da nossa família.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Ricardo Silva", text: "Ambiente extremamente acolhedor e palavra abençoada. Me senti muito bem recebido." },
            { name: "Ana Paula", text: "Os GCs são maravilhosos, uma oportunidade real de criar laços e crescer na fé." },
            { name: "Marcos Oliveira", text: "Igreja que vive o que prega. O acolhimento familiar é o diferencial aqui." }
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="flex text-accent mb-4">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="text-gray-200 mb-6 italic">"{t.text}"</p>
              <p className="font-bold text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Church({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 22V5l-6-3-6 3v17" />
      <path d="M12 7v5" />
      <path d="M10 9h4" />
    </svg>
  );
}
