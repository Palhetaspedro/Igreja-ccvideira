import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold">CCVideira</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            Uma comunidade acolhedora em Águas Claras, dedicada a promover a comunhão com Deus e o amor ao próximo.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link to="/ministerios" className="hover:text-white transition-colors">Ministérios</Link></li>
            <li><Link to="/eventos" className="hover:text-white transition-colors">Eventos</Link></li>
            <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Cultos</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>Quartas-feiras: 20h00</li>
            <li>Domingos: 09h00 e 18h00</li>
            <li>GCs: Diversos horários</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 text-accent" />
              <span>Taguatinga, Brasília - DF</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-accent" />
              <span>(61) 99999-9999</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-accent" />
              <span>contato@ccvideira.com.br</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-300">
        <p>© {new Date().getFullYear()} CCVideira Águas Claras. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
