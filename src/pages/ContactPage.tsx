import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-gray-600 text-lg">
            Estamos aqui para ouvir você. Seja para tirar dúvidas, pedir oração ou saber mais sobre nossos cultos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <MapPin size={24} />
                  <h3 className="font-bold text-xl">Localização</h3>
                </div>
                <p className="text-gray-600 text-sm">Taguatinga, Brasília - DF<br />Próximo ao metrô Águas Claras.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Clock size={24} />
                  <h3 className="font-bold text-xl">Horários</h3>
                </div>
                <p className="text-gray-600 text-sm">Quartas: 20h00<br />Domingos: 09h00 e 18h00</p>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.654321!2d-48.012345!3d-15.834567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzA0LjQiUyA0OMKwMDAnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Visite-nos</p>
                  <p className="text-sm text-gray-600">Taguatinga, Brasília - DF</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold mb-8">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Seu nome"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="seu@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-secondary rounded-xl border-none focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Como podemos te ajudar?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg"
              >
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
