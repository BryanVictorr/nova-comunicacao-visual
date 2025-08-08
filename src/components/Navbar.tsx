// 1. IMPORTAR os componentes do Sheet
import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoSrc from '@/assets/logo.png';
import LogoSrcText from '@/assets/logo_nova.png';

const Navbar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const navItems = [
        { href: '#quem-somos', label: 'QUEM SOMOS' },
        { href: '/produtos-servicos', label: 'PRODUTOS E SERVIÇOS' },
        { href: '/contato', label: 'CONTATO' },
    ];

    const isActive = (href) => location.pathname === href;

    const handleNavClick = (e, href) => {
        // setIsOpen(false); 

        if (href.startsWith('#')) {
            e.preventDefault();
            const sectionId = href.substring(1);

            if (isHomePage) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }
    };

    const isSolid = isScrolled || !isHomePage;

    const navClasses = isSolid
        ? "bg-background/95 backdrop-blur-sm border-b border-border/20"
        : "bg-transparent border-b border-transparent";
        
    const navLinkColor = isSolid ? "text-foreground" : "text-white";

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logoSrc} alt="Logo Nova Comunicação" className="h-10 w-auto" />
                        <img src={LogoSrcText} alt="Logo Nova Comunicação" className="h-6 w-auto" />
                    </Link>

                    {/* Navegação Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`text-sm font-medium transition-colors duration-300 ${isActive(item.href) ? 'text-primary' : `${navLinkColor} hover:text-primary`}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Navegação Mobile */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="menu-mobile" size="sm" className={`transition-colors duration-300 ${navLinkColor}`}>
                                    <Menu size={24} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background w-3/4 p-6 pt-12">
                                <nav className="flex flex-col space-y-4">
                                    {navItems.map((item) => (
                                        // 7. ENVOLVER cada Link com SheetClose para fechar o menu ao clicar
                                        <SheetClose asChild key={item.href}>
                                            <Link
                                                to={item.href}
                                                onClick={(e) => handleNavClick(e, item.href)}
                                                className={`block px-3 py-2 text-lg font-medium rounded-md transition-colors duration-200 ${isActive(item.href) ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-primary/5'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;