import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Importando imagens de exemplo
import imgImpressos from '@/assets/hero-bg-1.jpg';
import imgComunicacao from '@/assets/hero-bg-2.jpg';
import imgAdesivacao from '@/assets/hero-bg-3.jpg';
import imgPromocionais from '@/assets/service-brindes.jpg';
import imgSinalizacao from '@/assets/service-folders.jpg';

interface VisualService {
    id: string; // ID para usar na URL
    imageSrc: string;
    title: string;
    description: string;
    href: string; 
  }
  
  const visualServicesList: VisualService[] = [
    {
      id: 'impressos-graficos',
      imageSrc: imgImpressos,
      title: 'Impressos Gráficos',
      description: 'Cartões de visita, flyers, folders e materiais de alta qualidade para sua marca.',
      href: '/produtos-servicos#impressos-graficos',
    },
    {
      id: 'comunicacao-visual',
      imageSrc: imgComunicacao,
      title: 'Comunicação Visual',
      description: 'Banners, fachadas, letras-caixa e totens para sinalização interna e externa.',
      href: '/produtos-servicos#comunicacao-visual',
    },
    {
      id: 'adesivacao-de-veiculos',
      imageSrc: imgAdesivacao,
      title: 'Adesivação de Veículos',
      description: 'Personalização completa ou parcial de frotas com adesivos de alta durabilidade.',
      href: '/produtos-servicos#adesivacao-de-veiculos',
    },
    {
      id: 'materiais-promocionais',
      imageSrc: imgPromocionais,
      title: 'Materiais Promocionais',
      description: 'Brindes, camisetas, canecas e itens personalizados para seus eventos e clientes.',
      href: '/produtos-servicos#materiais-promocionais',
    },
    {
      id: 'sinalizacao-corporativa',
      imageSrc: imgSinalizacao,
      title: 'Sinalização Corporativa',
      description: 'Placas de identificação, diretórios e sinalização de segurança para ambientes empresariais.',
      href: '/produtos-servicos#sinalizacao-corporativa',
    },
  ];

const VisualServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  // Efeito de loop para o destaque automático e rolagem
  useEffect(() => {
    // Não faz nada até a API do carrossel estar pronta
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      // Calcula o próximo índice
      const nextIndex = (activeIndex + 1) % visualServicesList.length;
      
      // 2. Comanda a rolagem suave para o próximo card
      api.scrollTo(nextIndex);
      // Atualiza o estado do card ativo
      setActiveIndex(nextIndex);
    }, 3000); // Muda o destaque a cada 3 segundos

    return () => clearInterval(interval);
  }, [api, activeIndex]); // O efeito depende da API e do índice ativo

  return (
    <section id="produtos-servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Produtos e Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossas soluções completas em comunicação visual, desenvolvidas com tecnologia de ponta e criatividade para impulsionar o seu negócio.
          </p>
        </div>

        <Carousel
          setApi={setApi} // 3. Pega a API do carrossel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {visualServicesList.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Link to={service.href} className="h-full">
                    <Card 
                      className={`
                        overflow-hidden h-full transition-all duration-500 border-2
                        ${activeIndex === index
                          ? 'border-primary shadow-xl -translate-y-2' // Efeito de destaque automático
                          : 'border-transparent'
                        }
                      `}
                    >
                      <CardHeader className="p-0">
                        <div className="overflow-hidden aspect-video">
                          <img 
                            src={service.imageSrc} 
                            alt={service.title} 
                            className={`
                              w-full h-full object-cover transition-transform duration-500
                              ${activeIndex === index ? 'scale-110' : ''} // Efeito de zoom na imagem
                            `}
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <CardTitle 
                          className={`
                            text-2xl font-semibold mb-2 transition-colors duration-300
                            ${activeIndex === index ? 'text-primary' : ''} // Efeito de cor no título
                          `}
                        >
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground flex-grow">
                          {service.description}
                        </p>
                        <div 
                          className={`
                            flex items-center font-semibold mt-4 transition-colors duration-300
                            ${activeIndex === index ? 'text-primary' : 'text-muted-foreground'}
                          `}
                        >
                          Ver mais
                          <ArrowRight 
                            className={`
                              w-4 h-4 ml-2 transition-transform duration-300
                              ${activeIndex === index ? 'translate-x-1' : ''} // Efeito na seta
                            `}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-2rem] top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-[-2rem] top-1/2 -translate-y-1/2" />
        </Carousel>

        <div className="text-center mt-16">
          <Link to="/produtos-servicos">
            <Button className="btn-hero text-lg px-8">
              Visualizar Catálogo
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VisualServicesSection;