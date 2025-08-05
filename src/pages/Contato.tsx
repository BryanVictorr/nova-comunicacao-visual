import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Rua das Comunicações, 123",
      details: "Centro - Cidade/UF - CEP 12345-678"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(11) 99999-9999",
      details: "WhatsApp disponível"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      info: "contato@novacomunicacao.com.br",
      details: "Resposta em até 2 horas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      details: "Sábado: 8h às 12h"
    }
  ];

  const services = [
    "Orçamento gratuito",
    "Atendimento personalizado", 
    "Projetos sob medida",
    "Entrega expressa",
    "Suporte pós-venda",
    "Garantia de qualidade"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Entre em Contato
            </Badge>
            <h1 className="text-5xl font-bold mb-6">Fale Conosco</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Estamos prontos para atender você. Entre em contato e receba 
              um atendimento personalizado para seu projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="card-catalog group text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-1">{contact.info}</p>
                  <CardDescription>{contact.details}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Envie sua Mensagem</h2>
              <Card className="card-catalog">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Descreva seu projeto ou necessidade..."
                      />
                    </div>
                    
                    <Button type="submit" className="btn-hero w-full text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Por que nos escolher?</h2>
              
              <Card className="card-catalog mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    Atendimento Especializado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Nossa equipe está preparada para entender suas necessidades 
                    e oferecer a melhor solução em comunicação visual para seu negócio.
                  </CardDescription>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">O que oferecemos:</h3>
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Card className="card-catalog mt-8 bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Precisa de urgência?</h3>
                  <p className="mb-4 opacity-90">Fale conosco pelo WhatsApp</p>
                  <Button variant="secondary" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Nossa Localização</h2>
          <Card className="card-catalog overflow-hidden">
            <div className="h-96 bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Venha nos visitar!</h3>
                <p className="text-muted-foreground">
                  Rua das Comunicações, 123<br/>
                  Centro - Cidade/UF
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contato;