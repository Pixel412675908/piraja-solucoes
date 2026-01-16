
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceForm from './components/ServiceForm';
import Technology from './components/Technology';
import Services from './components/Services';
import FAQ from './components/FAQ';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-navy font-sans selection:bg-electric selection:text-white">
      <Navbar />
      
      <main>
        {/* Seção Hero apenas com a imagem completa */}
        <Hero />
        
        {/* Seção do Formulário reposicionada para não sobrepor a imagem */}
        <section id="form" className="py-12 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-xl">
              <ServiceForm />
            </div>
          </div>
        </section>

        <Technology />
        <Services />
        <FAQ />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;
