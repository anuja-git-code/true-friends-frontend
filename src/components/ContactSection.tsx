import { Phone, Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Contact Us</h2>
          <p className="text-muted-foreground mt-3">We'd love to hear from you. Reach out for orders, queries, or partnerships.</p>
        </div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-6">
          <a
            href="tel:9226438833"
            className="flex flex-col items-center gap-3 bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center">
              <Phone className="text-primary-foreground" size={24} />
            </div>
            <span className="font-semibold text-foreground">Phone</span>
            <span className="text-muted-foreground text-sm">9226438833</span>
          </a>

          <a
            href="mailto:officialbuddybest@gmail.com"
            className="flex flex-col items-center gap-3 bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center">
              <Mail className="text-primary-foreground" size={24} />
            </div>
            <span className="font-semibold text-foreground">Email</span>
            <span className="text-muted-foreground text-sm text-center break-all">officialbuddybest@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/true_friends_foods?igsh=MTU3Z2JkMzNmZ2c0aA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center">
              <Instagram className="text-primary-foreground" size={24} />
            </div>
            <span className="font-semibold text-foreground">Instagram</span>
            <span className="text-muted-foreground text-sm">@true_friends_foods</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
