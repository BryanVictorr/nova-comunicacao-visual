import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Printer, 
  Palette, 
  Shirt, 
  Gift, 
  Building, 
  Car,
  ArrowRight,
  Star,
  CheckCircle 
} from 'lucide-react';

const ProdutosServicos = () => {
  const [activeCategory, setActiveCategory] = useState('impressao');

  const categories = [
    { id: 'impressao', label: 'Impressão Digital', icon: <Printer className="w-5 h-5" /> },
    { id: 'design', label: 'Design Gráfico', icon: <Palette className="w-5 h-5" /> },
    { id: 'textil', label: 'Produtos Têxteis', icon: <Shirt className="w-5 h-5" /> },
    { id: 'brindes', label: 'Brindes', icon: <Gift className="w-5 h-5" /> },
    { id: 'sinalizacao', label: 'Sinalização', icon: <Building className="w-5 h-5" /> },
    { id: 'automotivo', label: 'Adesivação', icon: <Car className="w-5 h-5" /> },
  ];

  const products = {
    impressao: [
      {
        title: "Cartões de Visita",
        description: "Cartões personalizados com acabamentos especiais",
        price: "A partir de R$ 50",
        features: ["Papel especial", "Verniz UV", "Relevo seco", "Corte especial"],
        popular: true
      },
      {
        title: "Folders e Panfletos",
        description: "Material promocional de alta qualidade",
        price: "A partir de R$ 80",
        features: ["Papel couché", "Dobras especiais", "Acabamento UV", "Formatos variados"]
      },
      {
        title: "Catálogos e Revistas",
        description: "Impressão offset e digital para grandes tiragens",
        price: "A partir de R$ 200",
        features: ["Encadernação", "Papel premium", "Cores vibrantes", "Acabamentos especiais"]
      },
      {
        title: "Banners e Faixas",
        description: "Impressão em lona para eventos e promoções",
        price: "A partir de R$ 120",
        features: ["Lona resistente", "Cores duradouras", "Ilhoses", "Tamanhos personalizados"]
      }
    ],
    design: [
      {
        title: "Identidade Visual",
        description: "Criação completa de marca e aplicações",
        price: "A partir de R$ 800",
        features: ["Logotipo", "Manual da marca", "Aplicações", "Consultoria"],
        popular: true
      },
      {
        title: "Design Editorial",
        description: "Diagramação de livros, revistas e catálogos",
        price: "A partir de R$ 400",
        features: ["Layout profissional", "Tratamento de imagens", "Tipografia", "Preparação para impressão"]
      },
      {
        title: "Embalagens",
        description: "Design criativo para produtos e serviços",
        price: "A partir de R$ 600",
        features: ["Conceito criativo", "Mockups", "Protótipo", "Arquivo para produção"]
      },
      {
        title: "Material Digital",
        description: "Peças para redes sociais e marketing digital",
        price: "A partir de R$ 300",
        features: ["Posts", "Stories", "Banners web", "E-mail marketing"]
      }
    ],
    textil: [
      {
        title: "Camisetas Personalizadas",
        description: "Estampas em silk, transfer e bordado",
        price: "A partir de R$ 25",
        features: ["Silk screen", "Transfer", "Bordado", "Tecidos variados"],
        popular: true
      },
      {
        title: "Uniformes Profissionais",
        description: "Uniformes para empresas e eventos",
        price: "A partir de R$ 80",
        features: ["Tecidos profissionais", "Bordado", "Diversos modelos", "Tamanhos especiais"]
      },
      {
        title: "Bonés e Chapéus",
        description: "Bonés bordados e estampados",
        price: "A partir de R$ 35",
        features: ["Bordado 3D", "Estampa", "Modelos variados", "Regulagem"]
      },
      {
        title: "Ecobags",
        description: "Sacolas ecológicas personalizadas",
        price: "A partir de R$ 15",
        features: ["Material ecológico", "Silk screen", "Diversos tamanhos", "Alças reforçadas"]
      }
    ],
    brindes: [
      {
        title: "Canetas Personalizadas",
        description: "Canetas com gravação laser ou impressão",
        price: "A partir de R$ 8",
        features: ["Gravação laser", "Impressão UV", "Modelos variados", "Embalagem especial"]
      },
      {
        title: "Squeezes e Copos",
        description: "Utensílios personalizados para eventos",
        price: "A partir de R$ 20",
        features: ["Material atóxico", "Impressão UV", "Cores variadas", "Tampa com bico"],
        popular: true
      },
      {
        title: "Pen Drives",
        description: "Dispositivos USB com logo personalizado",
        price: "A partir de R$ 45",
        features: ["Gravação laser", "Capacidades variadas", "Formatos especiais", "Embalagem premium"]
      },
      {
        title: "Calendários",
        description: "Calendários de mesa e parede personalizados",
        price: "A partir de R$ 25",
        features: ["Wire-o", "Papel couché", "Personalização total", "Suporte especial"]
      }
    ],
    sinalizacao: [
      {
        title: "Placas de Identificação",
        description: "Sinalização interna e externa para empresas",
        price: "A partir de R$ 150",
        features: ["ACM", "Acrílico", "PVC", "LED backlight"],
        popular: true
      },
      {
        title: "Totens e Displays",
        description: "Estruturas promocionais para eventos",
        price: "A partir de R$ 300",
        features: ["Portátil", "Iluminação LED", "Impressão HD", "Montagem fácil"]
      },
      {
        title: "Fachadas Comerciais",
        description: "Comunicação visual externa completa",
        price: "Sob consulta",
        features: ["Projeto exclusivo", "Iluminação", "Materiais premium", "Instalação"]
      },
      {
        title: "Sinalização de Segurança",
        description: "Placas de segurança e orientação",
        price: "A partir de R$ 40",
        features: ["Normas técnicas", "Material resistente", "Refletivo", "Auto adesivo"]
      }
    ],
    automotivo: [
      {
        title: "Adesivação de Veículos",
        description: "Envelopamento total ou parcial",
        price: "A partir de R$ 800",
        features: ["Vinil premium", "Impressão HD", "Aplicação profissional", "Garantia"],
        popular: true
      },
      {
        title: "Adesivos para Frota",
        description: "Identificação de veículos comerciais",
        price: "A partir de R$ 200",
        features: ["Vinil recortado", "Cores sólidas", "Resistente", "Aplicação incluída"]
      },
      {
        title: "Plotagem Arquitetônica",
        description: "Adesivos decorativos para vidros",
        price: "A partir de R$ 120",
        features: ["Vinil translúcido", "Corte eletrônico", "Fácil aplicação", "Remoção limpa"]
      },
      {
        title: "Adesivos Promocionais",
        description: "Adesivos para campanhas e eventos",
        price: "A partir de R$ 60",
        features: ["Vinil adesivo", "Corte especial", "Laminação", "Resistente ao tempo"]
      }
    ]
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Catálogo
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Produtos e Serviços</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Descubra nossa linha completa de produtos e serviços em comunicação visual. 
              Qualidade garantida e preços competitivos.
            </p>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            {/* Category Tabs */}
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-12 h-auto p-1">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="flex flex-col gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.icon}
                  <span className="text-xs font-medium">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Products Grid */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {products[category.id as keyof typeof products]?.map((product, index) => (
                    <Card key={index} className="card-catalog group relative animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      {product.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center justify-between">
                          {product.title}
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </CardTitle>
                        <CardDescription className="text-base">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-gradient">{product.price}</span>
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          {product.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button className="w-full btn-hero">
                          Solicitar Orçamento
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Não encontrou o que procura?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trabalhamos com projetos personalizados. Entre em contato e conte-nos sua necessidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero text-lg px-8">
              Projeto Personalizado
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProdutosServicos;