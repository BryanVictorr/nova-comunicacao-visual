import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award, Clock, CheckCircle } from 'lucide-react';

const QuemSomos = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pelo Design",
      description: "Cada projeto é tratado com carinho e dedicação"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco no Cliente",
      description: "Suas necessidades são nossa prioridade"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Premium",
      description: "Utilizamos os melhores materiais e tecnologias"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Agilidade",
      description: "Prazos respeitados e entregas pontuais"
    }
  ];

  const achievements = [
    { number: "15+", label: "Anos de Experiência" },
    { number: "2000+", label: "Projetos Realizados" },
    { number: "500+", label: "Clientes Satisfeitos" },
    { number: "24h", label: "Suporte Disponível" }
  ];

  const differentials = [
    "Equipamentos de última geração",
    "Equipe especializada e criativa",
    "Materiais de alta qualidade",
    "Preços competitivos",
    "Atendimento personalizado",
    "Entregas rápidas"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Quem Somos
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Nova Comunicação</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Somos uma gráfica especializada em comunicação visual, 
              comprometida em transformar suas ideias em realidade através 
              de soluções criativas e de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Nossa História</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Fundada em 2009, a Nova Comunicação nasceu da paixão pela arte gráfica 
                  e do desejo de oferecer soluções inovadoras em comunicação visual para 
                  empresas de todos os portes.
                </p>
                <p>
                  Ao longo dos anos, evoluímos constantemente, investindo em tecnologia 
                  de ponta e capacitação de nossa equipe para sempre entregar o melhor 
                  resultado aos nossos clientes.
                </p>
                <p>
                  Hoje, somos referência no mercado, reconhecidos pela qualidade, 
                  criatividade e comprometimento com a excelência em cada projeto.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-catalog text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Nossos Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que norteiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-catalog group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Nossos Diferenciais</h2>
              <p className="text-xl text-muted-foreground">
                O que nos torna únicos no mercado de comunicação visual
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentials.map((differential, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{differential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Conheça nossos produtos e serviços e descubra como podemos ajudar sua empresa a se comunicar melhor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8 py-3 text-lg">
              Ver Produtos e Serviços
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary">
              Entrar em Contato
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;