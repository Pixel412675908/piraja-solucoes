
import React from 'react';

const Technology: React.FC = () => {
  const techs = [
    {
      title: "Tecnologia Não Invasiva",
      desc: "Localizamos e resolvemos o problema sem quebrar pisos ou azulejos desnecessariamente.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Precisão Diagnóstica",
      desc: "Vídeo inspeção em HD para visualização interna da tubulação em tempo real.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Higiene Total",
      desc: "Equipamentos blindados que evitam odores e sujeira no ambiente do cliente.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="tecnologia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Header Column - Aligned & Clean */}
          <div className="w-full lg:w-1/2 space-y-6 lg:sticky lg:top-32">
            <div className="space-y-2">
              <span className="text-electric font-bold tracking-widest text-sm uppercase block">Eficiência Máxima</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Nossa tecnologia <br />
                <span className="text-electric">à sua disposição.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Soluções inteligentes com tecnologia não invasiva para resultados definitivos sem danos colaterais ao seu imóvel.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-semibold text-navy text-sm uppercase tracking-tight">Equipes Locais 24h</span>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
            {techs.map((tech, i) => (
              <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-gray-100">
                <div className="flex-shrink-0 w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center text-electric group-hover:bg-electric group-hover:text-white transition-all duration-300">
                  {tech.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-navy">{tech.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
