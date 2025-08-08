import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { MessageCircle, Award, Palette, CheckCircle } from 'lucide-react';

// Importando as imagens
import image1 from '../assets/hero-bg-1.jpg'
import image2 from '../assets/hero-bg-2.jpg'
import image3 from '../assets/hero-bg-3.jpg'

const images: string[] = [image1, image2, image3]
const imageByIndex = (index: number): string => images[index % images.length]

const HeroCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* CAMADA DE FUNDO: Carrossel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="h-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="relative w-full h-[100vh]">
                <img
                  src={imageByIndex(index)}
                  alt={`Slide de fundo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Filtro Escuro */}
        <div className="absolute inset-0 bg-black/30 z-10" />

      </div>

      {/* CAMADA DE CONTEÚDO */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl text-white pt-10 pb-10 sm:pt-20 sm:pb-20 text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Comunicação visual que transforma <span className="text-primary">suas ideias</span> em impacto
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200 drop-shadow-md">
            Soluções criativas e personalizadas para destacar sua marca no mundo físico e digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center sm:items-start">
            <a href="https://wa.me/5589981060908?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
              <Button className="btn-hero text-lg px-8 h-14">
                <MessageCircle className="w-5 h-5 mr-2" />
                Pedir Orçamento
              </Button>
            </a>
            <Link to="/produtos-servicos">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 h-14 border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Ver Portfólio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel;