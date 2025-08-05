import HeroCarousel from '@/components/HeroCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Printer, Palette, Users, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Impressão Digital",
      description: "Qualidade profissional em todos os formatos",
      badge: "Mais Popular"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Gráfico",
      description: "Criação de identidades visuais únicas",
      badge: "Criativo"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunicação Visual",
      description: "Soluções completas para sua empresa",
      badge: "Completo"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Materiais Premium",
      description: "Acabamentos especiais e materiais de qualidade",
      badge: "Premium"
    }
  ];

  const products = [
    { name: "Cartões de Visita", price: "A partir de R$ 50" },
    { name: "Folders e Panfletos", price: "A partir de R$ 80" },
    { name: "Banners e Faixas", price: "A partir de R$ 120" },
    { name: "Adesivos Personalizados", price: "A partir de R$ 40" },
    { name: "Camisetas e Uniformes", price: "A partir de R$ 25" },
    { name: "Brindes Promocionais", price: "Consulte preços" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em comunicação visual para sua empresa se destacar no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-catalog group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="mb-2">{service.badge}</Badge>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Catalog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Catálogo de Produtos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira alguns de nossos produtos mais solicitados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="card-catalog group animate-fade-in-up cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-primary font-medium">{product.price}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-hero text-lg px-8">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar seu projeto?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8 py-3 text-lg">
              Pedir Orçamento
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;