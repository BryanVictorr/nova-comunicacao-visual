import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Rua das Comunicações, 123 - Centro"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "(11) 99999-9999"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "contato@novacomunicacao.com.br"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Segunda a Sexta: 8h às 18h"
    }
  ];

  const services = [
    "Impressão Digital",
    "Design Gráfico", 
    "Produtos Têxteis",
    "Brindes Promocionais",
    "Sinalização",
    "Adesivação Automotiva"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">Nova Comunicação</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Especialistas em comunicação visual. Transformamos suas ideias 
              em realidade com qualidade e criatividade.
            </p>
            <Button className="btn-hero">
              <MessageCircle className="w-4 h-4 mr-2" />
              Pedir Orçamento
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-0.5">
                    {info.icon}
                  </div>
                  <span className="text-background/80 text-sm">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-background/80 text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Redes Sociais</h3>
            <p className="text-background/80 text-sm mb-6">
              Siga-nos e acompanhe nossos trabalhos e novidades!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>
            © {currentYear} Nova Comunicação. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;