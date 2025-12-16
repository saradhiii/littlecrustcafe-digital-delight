import { Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso text-vanilla">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Little<span className="text-coral">Crust</span>Cafe
            </h3>
            <p className="text-vanilla/70 mb-6 leading-relaxed">
              Where every bite tells a story. Premium waffles, Scoops ice cream, 
              and global cuisine in a cozy setting.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-vanilla/10 flex items-center justify-center hover:bg-coral transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-vanilla/70 hover:text-coral transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-vanilla/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9AM - 12AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>9AM - 12AM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-vanilla/5 rounded-xl">
              <p className="text-sm text-coral font-medium">Scoops Ice Cream Partner</p>
              <p className="text-xs text-vanilla/60 mt-1">Premium ice cream, always available!</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vanilla/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-vanilla/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Littlecrustcafe. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-coral flex items-center justify-center hover:bg-coral-light transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
