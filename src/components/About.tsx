import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, IceCream, Heart } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const features = [
  {
    icon: Coffee,
    title: "Cozy Ambience",
    description: "A warm, inviting space perfect for catching up with friends or enjoying some alone time.",
  },
  {
    icon: IceCream,
    title: "Scoops Partner",
    description: "Proud franchise of Scoops India, bringing you premium ice cream flavors.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is crafted with passion using the freshest ingredients.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={cafeInterior}
                alt="Littlecrustcafe cozy interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-coral text-accent-foreground px-6 py-4 rounded-2xl shadow-xl"
            >
              <p className="text-sm font-medium">Scoops Franchise</p>
              <p className="text-2xl font-display font-bold">Since 2020</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-coral text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Place Where <br />
              <span className="text-coral">Flavors Meet</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nestled in the heart of India, Littlecrustcafe is more than just a cafe — 
              it's a culinary journey. From our signature Belgian waffles to creamy Scoops 
              ice cream, from authentic Italian pasta to flavorful Chinese cuisine, 
              we bring the world to your plate.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              As a proud franchise partner of Scoops India, we serve premium ice cream 
              that perfectly complements our handcrafted desserts. Every visit is a 
              celebration of taste, texture, and togetherness.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-coral/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-coral" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
