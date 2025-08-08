import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
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

// Importando a logo para usar no rodapé
import logoSrc from '@/assets/logo.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 1. INFORMAÇÕES DE CONTATO ATUALIZADAS E COM LINKS
  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Av. Deputado Raimundo de Sá Urtiga, Bomba, Picos-PI",
      href: "https://maps.app.goo.gl/XzM8tzEid8q8xfkg9"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "(89) 98106-0908",
      href: "tel:+5589981060908"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "contato@novvacv.com.br",
      href: "mailto:contato@novvacv.com.br"
    },
  ];

  // 2. LISTA DE SERVIÇOS ATUALIZADA E COM LINKS
  const services = [
    { label: "Impressos Gráficos", href: "/produtos-servicos#impressos-graficos" },
    { label: "Comunicação Visual", href: "/produtos-servicos#comunicacao-visual" },
    { label: "Adesivação de Veículos", href: "/produtos-servicos#adesivacao-de-veiculos" },
    { label: "Materiais Promocionais", href: "/produtos-servicos#materiais-promocionais" },
    { label: "Sinalização Corporativa", href: "/produtos-servicos#sinalizacao-corporativa" },
  ];

  // 3. LINKS DE REDES SOCIAIS ATUALIZADOS
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/novva.comunicacao/" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            {/* 4. LOGO ATUALIZADA */}
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoSrc} alt="Logo Novva Comunicação" className="h-10 w-auto bg-white p-1 rounded-md" />
              <span className="text-xl font-bold">Novva Comunicação Visual</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Especialistas em comunicação visual. Transformamos suas ideias 
              em realidade com qualidade e criatividade.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group"
                >
                  <div className="text-primary mt-0.5">
                    {info.icon}
                  </div>
                  <span className="text-background/80 text-sm group-hover:text-primary transition-colors">
                    {info.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.href} 
                  className="block text-background/80 text-sm hover:text-primary transition-colors"
                >
                  {service.label}
                </Link>
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
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>
            © {currentYear} Novva Comunicação Visual. Todos os direitos reservados.
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