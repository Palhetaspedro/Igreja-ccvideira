import { motion } from 'motion/react';
import { Heart, Users, Target, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossa História</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A CCVideira Águas Claras nasceu de um desejo profundo de criar um ambiente onde a espiritualidade e a comunidade caminham juntas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Missão e Valores</h2>
            <p className="text-gray-600 leading-relaxed">
              Nossa missão é clara: promover a comunhão com Deus e o acolhimento familiar. Acreditamos que cada pessoa que entra por nossas portas deve se sentir parte de algo maior.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Heart className="text-accent" />, title: "Amor", desc: "Viver o amor de Cristo em cada ação." },
                { icon: <Users className="text-accent" />, title: "Família", desc: "Um lugar de pertencimento real." },
                { icon: <Target className="text-accent" />, title: "Propósito", desc: "Crescer juntos na fé e no serviço." },
                { icon: <ShieldCheck className="text-accent" />, title: "Verdade", desc: "Pautados na palavra de Deus." }
              ].map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0">{v.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{v.title}</h4>
                    <p className="text-sm text-gray-500">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1544427928-c49cdfebf494?auto=format&fit=crop&q=80&w=1000"
              alt="Church Community"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <section className="bg-white rounded-3xl p-12 md:p-20 shadow-xl border border-gray-100">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Venha nos conhecer</h2>
            <p className="text-gray-600 mb-10">
              Estamos localizados em Taguatinga, prontos para te receber com um café e um sorriso. Nossos cultos são momentos de celebração, aprendizado e renovação.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Culto de Celebração</p>
                <p className="text-xl font-serif italic text-primary">Domingos, 18h</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Culto de Oração</p>
                <p className="text-xl font-serif italic text-primary">Quartas, 20h</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
