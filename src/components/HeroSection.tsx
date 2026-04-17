import frenchFries from "@/assets/french-fries.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      <div className="bg-hero-gradient">
        <div className="container grid md:grid-cols-2 items-center gap-8 py-16 md:py-24">
          <div className="text-primary-foreground space-y-6 animate-fade-in-up">
            <span className="inline-block bg-primary-foreground/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium">
              🍟 Bite of Taste & Trust
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              True Friends
              <br />
              <span className="text-secondary">Foods</span>
            </h1>
            <p className="text-primary-foreground/85 text-lg max-w-lg leading-relaxed">
              From sharing snacks after school to sharing a dream — we believe good food brings good people together. Premium frozen foods made with real friendship.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-secondary text-secondary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Our Products
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in">
            <img
              src={frenchFries}
              alt="True Friends French Fries"
              className="w-72 md:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      {/* Wave divider */}
      <svg viewBox="0 0 1440 100" className="w-full -mt-1" preserveAspectRatio="none">
        <path
          fill="hsl(120 15% 95%)"
          d="M0,40 C360,100 720,0 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
