import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
// 1. Importar os hooks necessários do React
import { useRef, useState, useEffect } from "react"

// Importando as imagens
import image1 from '../assets/hero-bg-1.jpg'
import image2 from '../assets/hero-bg-2.jpg'
import image3 from '../assets/hero-bg-3.jpg'

const images: string[] = [image1, image2, image3]
const imageByIndex = (index: number): string => images[index % images.length]

const HeroCarousel = () => {
  const slideTexts = [
    <>SE SURPREENDA COM <br />  A NOSSA QUALIDADE!</>,
    "EQUIPE QUALIFICADA!",
    <>TECNOLOGIA <br /> DE PONTA!</>
  ];

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  // 2. Criar um estado para guardar a API do carrossel e o índice ativo
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // 3. Usar um useEffect para configurar o listener
  useEffect(() => {
    if (!api) {
      return
    }

    // Define o slide inicial
    setCurrent(api.selectedScrollSnap())

    // Ouve o evento 'select' para saber quando um slide muda
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    api.on("select", onSelect)

    // Limpa o listener quando o componente é desmontado
    return () => {
      api.off("select", onSelect)
    }
  }, [api])


  return (
    <section className='w-full'>
      {/* 4. Passar o 'setApi' para o componente Carousel */}
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="relative aspect-[4/3] md:aspect-[2.3/1]">
              <img
                src={imageByIndex(index)}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/30" />

              <div className="relative z-10 h-full max-w-screen-xl mx-auto flex items-center">
                <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="bg-[#FF6B07]/80 p-4 md:p-6 overflow-hidden">
                    {/* 5. A animação agora é controlada pelo estado 'current' */}
                    <h2
                      className={`
                        text-3xl md:text-4xl font-bold tracking-tight text-white max-w-3xl
                        transition-all duration-700 ease-out
                        ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
                      `}
                    >
                      {slideTexts[index]}
                    </h2>
                  </div>
                </div>
                <CarouselPrevious className="hidden md:flex absolute z-20 top-1/2 -translate-y-1/2 left-4 md:left-8 bg-white/70 hover:bg-white text-black border-0" />
                <CarouselNext className="hidden md:flex absolute z-20 top-1/2 -translate-y-1/2 right-4 md:right-8 bg-white/70 hover:bg-white text-black border-0" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default HeroCarousel