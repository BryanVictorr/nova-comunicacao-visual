import heroImage1 from '@/assets/hero-bg-1.jpg';
import heroImage2 from '@/assets/hero-bg-2.jpg';
import heroImage3 from '@/assets/hero-bg-3.jpg';

const HeroCarousel = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images with Carousel Animation */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-carousel-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage1})` }}
        />
        <div 
          className="absolute inset-0 bg-carousel-2 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url(${heroImage2})` }}
        />
        <div 
          className="absolute inset-0 bg-carousel-3 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url(${heroImage3})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Nova Comunicação
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up animate-delay-100">
            Sua parceira em comunicação visual. Criamos soluções gráficas que transformam ideias em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <button className="btn-hero text-lg px-10 py-4">
              Conhecer Produtos
            </button>
            <button className="glass text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Falar Conosco
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;