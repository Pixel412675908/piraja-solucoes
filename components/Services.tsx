
import React, { useState } from 'react';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  duration: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const servicesList: ServiceDetail[] = [
    {
      id: 'vaso',
      title: 'Vaso Sanitário',
      description: 'Remoção de obstruções internas sem necessidade de retirar o vaso em 90% dos casos. Utilizamos tecnologia de sucção e desobstrução rotativa.',
      duration: '30 a 60 minutos'
    },
    {
      id: 'pia',
      title: 'Pias e Ralos',
      description: 'Limpeza completa do sifão e da tubulação secundária, removendo acúmulo de gordura e detritos orgânicos com hidrojateamento leve.',
      duration: '40 a 90 minutos'
    },
    {
      id: 'esgoto',
      title: 'Esgoto/Fossa',
      description: 'Limpeza pesada e desobstrução de redes principais. Sucção de detritos e limpeza de paredes de fossas sépticas com destinação licenciada.',
      duration: '2 a 4 horas'
    },
    {
      id: 'redes',
      title: 'Redes Coletoras',
      description: 'Manutenção em tubulações de grande porte para condomínios e indústrias, utilizando caminhão de auto-vácuo e hidrojato de alta potência.',
      duration: 'Sob consulta'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy uppercase tracking-tight">Nossas Especialidades</h2>
          <p className="text-gray-500 leading-relaxed font-medium italic">Foco em eficiência e diagnóstico técnico preciso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
            >
              <h3 className="text-xl font-bold text-navy mb-8 group-hover:text-electric transition-colors uppercase tracking-wide">
                {service.title}
              </h3>
              <button 
                onClick={() => setSelectedService(service)}
                className="mt-auto px-8 py-2.5 rounded-full border-2 border-electric text-electric font-bold hover:bg-electric hover:text-white transition-all text-xs tracking-widest"
              >
                DETALHES
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-10 space-y-6">
              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-2 text-center">
                <h3 className="text-3xl font-bold text-navy uppercase tracking-tighter">{selectedService.title}</h3>
                <div className="inline-block px-3 py-1 bg-electric/10 text-electric text-xs font-bold rounded-full uppercase tracking-widest">Procedimento Técnico Pirajá</div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed text-left">
                <p className="font-bold text-navy text-[10px] uppercase tracking-[0.2em] opacity-60">Metodologia aplicada:</p>
                <p className="bg-gray-50 p-6 rounded-2xl italic border border-gray-100 text-sm">{selectedService.description}</p>
              </div>

              <div className="flex items-center justify-center gap-3 text-navy font-bold py-4 border-y border-gray-100">
                <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm tracking-tight">Tempo Médio: <span className="text-electric">{selectedService.duration}</span></span>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href={`https://wa.me/5519999999999?text=Olá, preciso de atendimento para: ${selectedService.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-electric hover:bg-blue-600 text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-electric/25 transition-all uppercase tracking-widest text-xs"
                >
                  CHAMAR NO WHATSAPP
                </a>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full py-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:text-navy transition-colors"
                >
                  VOLTAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
