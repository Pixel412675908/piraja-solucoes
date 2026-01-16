
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto custa o serviço de desentupimento?",
      a: "O valor é definido após uma avaliação técnica no local, pois depende da complexidade da obstrução e do equipamento necessário. Oferecemos orçamentos transparentes e sem compromisso."
    },
    {
      q: "Vocês precisam quebrar o piso ou a parede?",
      a: "Nossa prioridade é a tecnologia não invasiva. Utilizamos máquinas rotativas e hidrojateamento que resolvem o problema diretamente pela tubulação, evitando quebras desnecessárias em 99% dos casos."
    },
    {
      q: "Quanto tempo demora para a equipe chegar em Piracicaba?",
      a: "Temos equipes de prontidão 24h. O tempo médio de chegada em Piracicaba e região é de 40 a 60 minutos após a confirmação do chamado."
    },
    {
      q: "O serviço possui garantia?",
      a: "Sim. Todos os nossos serviços acompanham certificado de garantia técnica, garantindo a sua tranquilidade e a eficácia do trabalho realizado."
    },
    {
      q: "Atendem condomínios e empresas?",
      a: "Sim, somos especialistas em atendimento predial e industrial, com equipamentos de alta potência e emissão de nota fiscal para faturamento."
    },
    {
      q: "Quais as formas de pagamento?",
      a: "Aceitamos cartões de crédito (parcelamento em até 12x), débito, Pix e faturamento para empresas mediante análise."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy uppercase tracking-tight">DÚVIDAS FREQUENTES</h2>
          <div className="w-20 h-1 bg-electric mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-electric/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-electric/40 shadow-xl shadow-electric/5' : 'hover:border-electric/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors bg-white hover:bg-gray-50/50"
              >
                <span className={`font-bold text-lg pr-8 transition-colors ${
                  openIndex === index ? 'text-electric' : 'text-navy'
                }`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-electric text-white rotate-180' : 'bg-gray-100 text-gray-400'
                }`}>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 bg-gray-50/30">
                  <p className="py-4 font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm italic">
            Ainda tem dúvidas? <a href="#form" className="text-electric font-bold hover:underline">Fale com um especialista agora.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
