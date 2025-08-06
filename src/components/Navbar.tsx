import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoSrc from '@/assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Hook para navegação programática

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // 1. O href do "QUEM SOMOS" foi atualizado para um link de âncora
    const navItems = [
        { href: '#quem-somos', label: 'QUEM SOMOS' },
        { href: '/produtos-servicos', label: 'PRODUTOS E SERVIÇOS' },
        { href: '/contato', label: 'CONTATO' },
    ];

    const isActive = (href: string) => location.pathname === href;

    // 2. Lógica para lidar com cliques nos links da navegação
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false); // Fecha o menu mobile em qualquer clique
        
        // Se for um link de âncora (começa com #)
        if (href.startsWith('#')) {
            e.preventDefault(); // Impede o comportamento padrão de "pular"
            const sectionId = href.substring(1); // Remove o '#'

            // Se já estiver na página inicial, rola suavemente
            if (isHomePage) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // Se não estiver na home, navega para a home e depois rola
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100); // Pequeno atraso para dar tempo da página carregar
            }
        }
    };

    // --- Lógica de Estilo Dinâmico (nenhuma mudança aqui) ---
    const navClasses = isScrolled || !isHomePage ? "bg-background/95 backdrop-blur-sm border-b border-border/20" : "bg-transparent border-b border-transparent";
    const navLinkColor = isScrolled || !isHomePage ? "text-foreground" : "text-white";
    const logoTextColor = isScrolled || !isHomePage ? "text-foreground" : "text-white";
    const buttonClasses = isScrolled || !isHomePage ? "btn-hero" : "btn-hero-outline";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logoSrc} alt="Logo Nova Comunicação" className="h-10 w-auto" />
                        <span className={`font-bold text-xl transition-colors duration-300 ${logoTextColor}`}>
                            NOVA COMUNICAÇÃO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={(e) => handleNavClick(e, item.href)} // 3. Adicionado o handler de clique
                                className={`text-sm font-medium transition-colors duration-300 ${
                                    isActive(item.href) ? 'text-primary' : `${navLinkColor} hover:text-primary`
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button className={buttonClasses}>PEDIR ORÇAMENTO</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className={`transition-colors duration-300 ${navLinkColor}`}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border-t border-border/50">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)} // 3. Adicionado o handler de clique
                                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                                        isActive(item.href) ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button className="btn-hero w-full">Pedir Orçamento</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;