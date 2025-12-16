import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import wafflesImg from "@/assets/waffles.jpg";
import shakesImg from "@/assets/shakes.jpg";
import icecreamImg from "@/assets/icecream.jpg";
import italianImg from "@/assets/italian.jpg";
import chineseImg from "@/assets/chinese.jpg";

const categories = [
  { id: "waffles", name: "Waffles", icon: "🧇" },
  { id: "shakes", name: "Shakes", icon: "🥤" },
  { id: "icecream", name: "Ice Cream", icon: "🍦" },
  { id: "italian", name: "Italian", icon: "🍝" },
  { id: "chinese", name: "Chinese", icon: "🥡" },
];

const menuItems = {
  waffles: {
    image: wafflesImg,
    description: "Crispy Belgian waffles made fresh, topped with your choice of fruits, cream, and sauces.",
    items: [
      { name: "Classic Belgian Waffle", price: "₹199", desc: "Pure vanilla, powdered sugar" },
      { name: "Strawberry Bliss", price: "₹249", desc: "Fresh strawberries, whipped cream" },
      { name: "Chocolate Lover", price: "₹279", desc: "Nutella, chocolate chips, ice cream" },
      { name: "Tropical Paradise", price: "₹299", desc: "Mixed fruits, honey drizzle" },
      { name: "Red Velvet Dream", price: "₹319", desc: "Red velvet sauce, cream cheese" },
    ],
  },
  shakes: {
    image: shakesImg,
    description: "Thick, creamy milkshakes blended to perfection with premium ingredients.",
    items: [
      { name: "Classic Vanilla", price: "₹149", desc: "Rich vanilla bean shake" },
      { name: "Chocolate Thunder", price: "₹179", desc: "Double chocolate indulgence" },
      { name: "Strawberry Dream", price: "₹169", desc: "Fresh strawberry blend" },
      { name: "Oreo Crunch", price: "₹199", desc: "Cookies and cream delight" },
      { name: "Caramel Macchiato", price: "₹219", desc: "Coffee meets caramel" },
    ],
  },
  icecream: {
    image: icecreamImg,
    description: "Premium Scoops ice cream — India's beloved ice cream brand, now at your table.",
    items: [
      { name: "Single Scoop", price: "₹79", desc: "Choose any flavor" },
      { name: "Double Scoop", price: "₹139", desc: "Mix and match flavors" },
      { name: "Sundae Special", price: "₹199", desc: "3 scoops with toppings" },
      { name: "Waffle Cone Delight", price: "₹169", desc: "2 scoops in fresh waffle cone" },
      { name: "Banana Split", price: "₹249", desc: "Classic dessert, 3 flavors" },
    ],
  },
  italian: {
    image: italianImg,
    description: "Authentic Italian flavors — handcrafted pasta, wood-fired pizzas, and more.",
    items: [
      { name: "Margherita Pizza", price: "₹349", desc: "Classic tomato, mozzarella, basil" },
      { name: "Penne Arrabiata", price: "₹299", desc: "Spicy tomato sauce pasta" },
      { name: "Creamy Alfredo", price: "₹329", desc: "Rich parmesan cream sauce" },
      { name: "Pepperoni Pizza", price: "₹399", desc: "Loaded with pepperoni" },
      { name: "Lasagna", price: "₹379", desc: "Layered pasta perfection" },
    ],
  },
  chinese: {
    image: chineseImg,
    description: "Indo-Chinese favorites — bold flavors, wok-tossed goodness.",
    items: [
      { name: "Veg Fried Rice", price: "₹199", desc: "Classic wok-fried rice" },
      { name: "Hakka Noodles", price: "₹219", desc: "Stir-fried with vegetables" },
      { name: "Manchurian", price: "₹249", desc: "Crispy veg in tangy sauce" },
      { name: "Chilli Paneer", price: "₹279", desc: "Spicy cottage cheese" },
      { name: "Spring Rolls", price: "₹179", desc: "Crispy veggie rolls (6 pcs)" },
    ],
  },
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("waffles");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentMenu = menuItems[activeCategory as keyof typeof menuItems];

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-coral text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Our Offerings
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Delicious <span className="text-coral">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From sweet treats to savory delights, explore our carefully curated menu.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-coral text-accent-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Image Card */}
          <div className="menu-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={currentMenu.image}
                alt={`${activeCategory} at Littlecrustcafe`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 capitalize">
                {activeCategory}
              </h3>
              <p className="text-muted-foreground">{currentMenu.description}</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {currentMenu.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-5 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-lg">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <span className="text-coral font-bold text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
