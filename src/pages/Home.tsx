import HeroCarousel from '@/components/HeroCarousel';
import AboutSection from '@/components/AboutSection';
import VisualServicesSection from '@/components/VisualServicesSection';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react'; // Ícones necessários

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Us Section */}
      <AboutSection />

      {/* Seção de Produtos e Serviços Visual */}
      <VisualServicesSection />

      {/* CTA Section (seção final de chamada para ação) - ATUALIZADA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar seu projeto?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            {/* 1. Botão do WhatsApp (Laranja) */}
            <a href="https://wa.me/5589981455724?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
              <Button className="btn-hero px-8 py-3 text-lg w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </a>

            {/* 2. Botão de E-mail (Escuro) */}
            <a href="mailto:novvacomunicacaografica@gmail.com">
              <Button variant="secondary" size="lg" className="px-8 py-3 text-lg w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </Button>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;