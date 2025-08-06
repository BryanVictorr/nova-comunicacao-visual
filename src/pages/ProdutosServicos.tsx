import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Printer, 
  Presentation, 
  CarFront, 
  Gift, 
  Building2,
  ArrowRight,
  Star,
  CheckCircle 
} from 'lucide-react';

// Importando as imagens que você já tem no projeto
import serviceCartoes from '@/assets/service-cartoes.jpg';
import serviceBanners from '@/assets/service-banners.jpg';
import serviceCamisetas from '@/assets/service-camisetas.jpg';
import serviceBrindes from '@/assets/service-brindes.jpg';
import serviceAdesivos from '@/assets/service-adesivos.jpg';
import serviceFolders from '@/assets/service-folders.jpg';

// 1. ESTRUTURA DE DADOS UNIFICADA COM OS NOMES CORRETOS DA HOME
const categories = [
  { id: 'impressos-graficos', label: 'Impressos Gráficos', icon: <Printer className="w-5 h-5" /> },
  { id: 'comunicacao-visual', label: 'Comunicação Visual', icon: <Presentation className="w-5 h-5" /> },
  { id: 'adesivacao-de-veiculos', label: 'Adesivação', icon: <CarFront className="w-5 h-5" /> },
  { id: 'materiais-promocionais', label: 'Brindes', icon: <Gift className="w-5 h-5" /> },
  { id: 'sinalizacao-corporativa', label: 'Sinalização', icon: <Building2 className="w-5 h-5" /> },
];

const productsByCategory = {
  'impressos-graficos': [
    { title: "Cartões de Visita", description: "Acabamentos especiais para um toque profissional.", price: "A partir de R$ 50", features: ["Papel especial", "Verniz UV", "Relevo seco"], popular: true, image: serviceCartoes },
    { title: "Folders e Panfletos", description: "Material promocional de alta qualidade.", price: "A partir de R$ 80", features: ["Papel couché", "Dobras especiais", "Formatos variados"], image: serviceFolders },
  ],
  'comunicacao-visual': [
    { title: "Fachadas Comerciais", description: "Comunicação visual externa completa e impactante.", price: "Sob consulta", features: ["Projeto exclusivo", "Iluminação LED", "Materiais premium"], popular: true, image: serviceBanners }
  ],
  'adesivacao-de-veiculos': [
    { title: "Envelopamento de Frota", description: "Envelopamento total ou parcial de veículos.", price: "A partir de R$ 800", features: ["Vinil premium", "Aplicação profissional", "Garantia"], popular: true, image: serviceAdesivos }
  ],
  'materiais-promocionais': [
    { title: "Camisetas Personalizadas", description: "Estampas em silk, transfer e bordado.", price: "A partir de R$ 25", features: ["Silk screen", "Bordado", "Tecidos variados"], popular: true, image: serviceCamisetas },
    { title: "Canetas e Agendas", description: "Brindes corporativos com gravação a laser.", price: "A partir de R$ 8", features: ["Gravação laser", "Modelos variados", "Embalagem especial"], image: serviceBrindes },
  ],
  'sinalizacao-corporativa': [
    { title: "Placas de Identificação", description: "Sinalização interna e externa para empresas.", price: "A partir de R$ 150", features: ["ACM", "Acrílico", "PVC"], popular: true, image: serviceFolders }
  ]
};

const ProdutosServicosPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(categories[0].id);

  // Lógica para pré-selecionar a aba com base na URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const categoryExists = categories.some(cat => cat.id === hash);
    if (hash && categoryExists) {
      setActiveTab(hash);
    } else {
      setActiveTab(categories[0].id);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Produtos e Serviços</h1>
          <p className="text-xl opacity-90 leading-relaxed max-w-4xl mx-auto">
            Descubra nossa linha completa de produtos e serviços em comunicação visual. Qualidade garantida e preços competitivos.
          </p>
        </div>
      </section>

      {/* Products Catalog com Abas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Abas com ícones e labels */}
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-12 h-auto p-1">
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

            {/* 2. CONTEÚDO VISUAL DENTRO DE CADA ABA */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {productsByCategory[category.id as keyof typeof productsByCategory]?.map((product, index) => (
                    <Card key={index} className="card-catalog group relative overflow-hidden flex flex-col animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      {product.popular && (
                        <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-secondary text-white">
                          <Star className="w-3 h-3 mr-1" /> Popular
                        </Badge>
                      )}
                      
                      {product.image && (
                        <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}
                      
                      <CardHeader>
                        <CardTitle>{product.title}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex flex-col flex-grow justify-between">
                        <div className="space-y-2 mb-6">
                          {product.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <p className="text-2xl font-bold text-gradient mb-4">{product.price}</p>
                          <Button className="w-full btn-hero">
                            Solicitar Orçamento
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ProdutosServicosPage;