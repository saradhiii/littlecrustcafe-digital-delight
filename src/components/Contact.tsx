import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["BHEL Avemachs, Mangapuram Colony, Green County Colony, Alwal, Hyderabad, Secunderabad, Telangana 500010"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 72077 58534", "+91 89770 09988"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@littlecrustcafe.com", "orders@littlecrustcafe.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 10AM - 11PM", "Sat - Sun: 9AM - 12AM"],
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-coral text-sm uppercase tracking-[0.2em] font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit <span className="text-coral">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to serve you! Find us at our cozy location or reach out anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[300px] card-elevated"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.289845287547!2d78.4881718!3d17.5060759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b005403546b%3A0x940d3a208e7bf3!2sLittle%20Crust%20Cafe!5e0!3m2!1sen!2sin!4v1733720000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Little Crust Cafe Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
