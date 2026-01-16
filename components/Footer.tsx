
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white leading-none tracking-tighter">
                PIRAJÁ
              </span>
              <span className="text-[10px] font-bold text-electric tracking-[0.3em] uppercase">
                Soluções
              </span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-xs">
              Especialistas locais em desobstrução de alta complexidade. Atuamos em toda a região de Piracicaba com foco em resolutividade e respeito ao cliente.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-electric">Atendimento</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Suporte Técnico 24 horas
              </li>
              <li>Atendimento em Piracicaba e Região</li>
              <li>Equipes em prontidão para emergências</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-electric">Canais Diretos</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="font-bold text-white text-lg">(19) 99999-9999</li>
              <li>contato@pirajasolucoes.com.br</li>
              <li>comercial@pirajasolucoes.com.br</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-electric">Localização</h5>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="leading-relaxed">
                Rua do Porto, 1234<br />
                Piracicaba - SP<br />
                CEP: 13400-000
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Piracicaba+SP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg border border-white/10 transition-all text-xs font-bold uppercase tracking-widest"
              >
                <svg className="w-4 h-4 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ver no mapa
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Pirajá Soluções. Unidade Piracicaba.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <a href="#" className="hover:text-electric transition-colors">Normas Técnicas</a>
            <a href="#" className="hover:text-electric transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;