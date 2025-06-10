
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-6 animate-fade-in">
          Feliz Dia dos Namorados
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light animate-fade-in">
          Celebrando nossa história de amor
        </p>
        
        <div className="flex justify-center space-x-4 animate-fade-in">
          <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />
          <Heart className="w-6 h-6 text-red-500 mt-1" fill="currentColor" />
          <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
