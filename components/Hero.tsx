
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 w-full bg-white flex flex-col items-center">
      {/* Imagem inserida diretamente no HTML para evitar cortes de background */}
      <div className="w-full">
        <img 
          src="https://i.postimg.cc/QdXcrzMs/file-00000000238c71f59a2fed37b0720e73.png" 
          alt="Pirajá Soluções Banner" 
          className="w-full h-auto block mx-auto max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;