import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface CarouselItem {
  id: string;
  title: string;
  synopsis: string;
  image: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export function ImageCarousel({ items, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div className="relative h-[400px] overflow-hidden rounded-xl bg-canvas border border-artistic-gold/20">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="flex h-full">
              <div className="w-1/3 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-l-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-canvas/80 rounded-l-xl" />
              </div>
              <div className="w-2/3 p-8 flex flex-col justify-center bg-canvas/90 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-ink-primary mb-4 font-artistic">
                  {item.title}
                </h3>
                <p className="text-ink-secondary leading-relaxed font-reading">
                  {item.synopsis}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-canvas/80 backdrop-blur-sm hover:bg-canvas border border-artistic-gold/30 h-10 w-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-canvas/80 backdrop-blur-sm hover:bg-canvas border border-artistic-gold/30 h-10 w-10"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-artistic-gold scale-125"
                : "bg-artistic-gold/30 hover:bg-artistic-gold/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}