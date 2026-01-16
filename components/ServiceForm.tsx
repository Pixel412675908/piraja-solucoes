
import React, { useState } from 'react';

const ServiceForm: React.FC = () => {
  const [form, setForm] = useState({
    nome: '',
    bairro: '',
    whatsapp: '',
    servico: '',
    outroDescricao: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitação enviada:', form);
    alert('Sua solicitação foi enviada! Nossos técnicos entrarão em contato em instantes.');
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl space-y-6">
      <div className="text-center space-y-1">
        <h3 className="text-2xl font-bold text-navy">Solicite Orçamento</h3>
        <p className="text-gray-500 text-sm">Resposta imediata pelo WhatsApp</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-navy/50 uppercase tracking-wider">Nome Completo</label>
          <input 
            type="text" 
            required
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-electric transition-all"
            placeholder="Ex: João da Silva"
            value={form.nome}
            onChange={e => setForm({...form, nome: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy/50 uppercase tracking-wider">Bairro em Piracicaba</label>
            <input 
              type="text" 
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-electric transition-all"
              placeholder="Ex: Nova Piracicaba"
              value={form.bairro}
              onChange={e => setForm({...form, bairro: e.target.value})}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-navy/50 uppercase tracking-wider">WhatsApp</label>
            <input 
              type="tel" 
              required
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-electric transition-all"
              placeholder="(19) 99999-9999"
              value={form.whatsapp}
              onChange={e => setForm({...form, whatsapp: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-navy/50 uppercase tracking-wider">Tipo de Serviço</label>
          <select 
            required
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-electric transition-all appearance-none cursor-pointer"
            value={form.servico}
            onChange={e => setForm({...form, servico: e.target.value})}
          >
            <option value="" disabled>Selecione o problema...</option>
            <option value="vaso">Vaso Sanitário</option>
            <option value="pia">Pia / Ralo</option>
            <option value="esgoto">Esgoto Predial</option>
            <option value="fossa">Limpeza de Fossa</option>
            <option value="outro">Outro (Descrever)</option>
          </select>
        </div>

        {form.servico === 'outro' && (
          <div className="space-y-1.5 animate-in slide-in-from-top-2 duration-300">
            <label className="text-xs font-bold text-navy/50 uppercase tracking-wider">Descreva o Problema</label>
            <textarea 
              required
              rows={3}
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-electric transition-all resize-none"
              placeholder="Conte-nos o que está acontecendo..."
              value={form.outroDescricao}
              onChange={e => setForm({...form, outroDescricao: e.target.value})}
            />
          </div>
        )}

        <button 
          type="submit"
          className="w-full bg-electric hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-electric/25 transition-all transform active:scale-[0.98] mt-4"
        >
          SOLICITAR ATENDIMENTO TÉCNICO
        </button>
      </form>
      
      <p className="text-center text-[10px] text-gray-400">
        Seus dados estão seguros e serão usados apenas para este atendimento.
      </p>
    </div>
  );
};

export default ServiceForm;
