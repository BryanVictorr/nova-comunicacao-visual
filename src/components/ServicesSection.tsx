import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Printer, 
  Presentation, 
  CarFront, 
  Gift, 
  Building2 
} from 'lucide-react';
// 1. Importar os hooks useState e useEffect
import React, { useState, useEffect } from 'react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const servicesList: Service[] = [
  {
    icon: Printer,
    title: 'Impressos Gráficos',
    description: 'Cartões de visita, flyers, folders e materiais de alta qualidade para sua marca.',
  },
  {
    icon: Presentation,
    title: 'Comunicação Visual',
    description: 'Banners, fachadas, letras-caixa e totens para sinalização interna e externa.',
  },
  {
    icon: CarFront,
    title: 'Adesivação de Veículos',
    description: 'Personalização completa ou parcial de frotas com adesivos de alta durabilidade.',
  },
  {
    icon: Gift,
    title: 'Materiais Promocionais',
    description: 'Brindes, camisetas, canecas e itens personalizados para seus eventos e clientes.',
  },
  {
    icon: Building2,
    title: 'Sinalização Corporativa',
    description: 'Placas de identificação, diretórios e sinalização de segurança para ambientes empresariais.',
  },
];

const ServicesSection = () => {
  // 2. Criar estado para controlar o card ativo
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Criar o efeito de loop para a animação
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesList.length);
    }, 2500); // Muda de card a cada 2.5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Produtos e Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e inovadoras para transformar a comunicação da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {servicesList.map((service, index) => (
            // 4. As classes agora são aplicadas condicionalmente
            <Card 
              key={index} 
              className={`
                group text-center border-2 transition-all duration-500 transform
                ${activeIndex === index 
                  ? 'border-primary shadow-xl -translate-y-2 bg-card' 
                  : 'border-transparent bg-muted/20'
                }
              `}
            >
              <CardHeader className="items-center">
                <div 
                  className={`
                    p-4 rounded-full mb-4 transition-colors duration-500
                    ${activeIndex === index 
                      ? 'bg-primary' 
                      : 'bg-muted'
                    }
                  `}
                >
                  <service.icon 
                    className={`
                      w-8 h-8 transition-colors duration-500
                      ${activeIndex === index 
                        ? 'text-primary-foreground' 
                        : 'text-foreground'
                      }
                    `}
                  />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;