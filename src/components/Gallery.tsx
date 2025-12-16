import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import wafflesImg from "@/assets/waffles.jpg";
import shakesImg from "@/assets/shakes.jpg";
import icecreamImg from "@/assets/icecream.jpg";
import italianImg from "@/assets/italian.jpg";
import chineseImg from "@/assets/chinese.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: heroBg, alt: "Cafe food spread" },
  { src: cafeInterior, alt: "Cafe interior ambience" },
  { src: wafflesImg, alt: "Belgian waffles" },
  { src: shakesImg, alt: "Colorful milkshakes" },
  { src: icecreamImg, alt: "Scoops ice cream" },
  { src: italianImg, alt: "Italian pasta" },
  { src: chineseImg, alt: "Chinese cuisine" },
];

export function Gallery() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-coral text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Visual Feast
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-coral">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our cozy cafe and the delicious creations we serve.
          </p>
        </motion.div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center transition-all ${
              canScrollLeft
                ? "opacity-100 hover:bg-coral hover:text-accent-foreground"
                : "opacity-30 cursor-not-allowed"
            } hidden md:flex`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center transition-all ${
              canScrollRight
                ? "opacity-100 hover:bg-coral hover:text-accent-foreground"
                : "opacity-30 cursor-not-allowed"
            } hidden md:flex`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 md:px-14 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="w-72 md:w-80 aspect-square rounded-2xl overflow-hidden card-elevated">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-muted-foreground text-sm mt-4 md:hidden">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
}
