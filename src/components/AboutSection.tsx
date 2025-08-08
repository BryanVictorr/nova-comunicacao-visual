import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/hero-bg-2.jpg'; 

const AboutSection = () => {
  return (
    
    <section id="quem-somos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="text-left animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Conheça a Novva Comunicação
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {/* COLOQUE AQUI O TEXTO SOBRE SUA EMPRESA */}
                Fundada com a paixão por transformar ideias em realidade, a Novva Comunicação é sua parceira estratégica em comunicação visual. 
                Com anos de experiência, combinamos criatividade e tecnologia de ponta para entregar resultados que impressionam.
              </p>
              <p>
                Nossa equipe de especialistas se dedica a cada projeto com o máximo de atenção, garantindo qualidade superior e o cumprimento rigoroso dos prazos.
              </p>
            </div>
            <Button className="btn-hero mt-8 text-lg">
              Saiba Mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          {/* Coluna da Imagem */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={aboutImage} 
              alt="Escritório da Novva Comunicação"
              className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;