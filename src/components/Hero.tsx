import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/pexels-teejay-1362534.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Delicious food spread at Littlecrustcafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-coral text-sm md:text-base uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Cafe • Ice Cream • Desserts
          </motion.p>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-vanilla mb-6 leading-tight">
            Little<span className="text-coral">Crust</span>Cafe
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-vanilla/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Where every bite tells a story. Indulge in our handcrafted waffles, 
            creamy Scoops ice cream, and exquisite global cuisine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#menu"
              className="btn-accent px-8 py-4 rounded-full text-lg font-semibold min-w-[200px]"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="btn-outline-light px-8 py-4 rounded-full text-lg font-semibold min-w-[200px]"
            >
              Visit Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-vanilla/70 hover:text-vanilla transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
