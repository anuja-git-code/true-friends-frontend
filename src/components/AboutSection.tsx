import { ShieldCheck, Leaf, Award, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Heart, label: "Taste" },
  { icon: ShieldCheck, label: "Trust" },
  { icon: Award, label: "Quality" },
  { icon: Leaf, label: "Ethics" },
  { icon: Lightbulb, label: "Innovation" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From School Friends to <span className="text-gradient">Startup Founders</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              It began in September 2025, at Satara District — a journey from school to startup. We were best friends who believed good food brings good people together. That belief became True Friends.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built with hustle, late nights, and a lot of frozen fries, we're on a mission to serve food that's not just quick and tasty, but made with real friendship behind it. Because every bite should feel like home.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Our Core Values</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 bg-muted rounded-xl p-5 hover:bg-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center">
                    <Icon className="text-primary-foreground" size={22} />
                  </div>
                  <span className="font-semibold text-foreground text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="bg-accent rounded-xl p-6 border border-border">
              <h4 className="font-bold text-foreground mb-2">Our Vision</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "To become the most trusted provider of premium, sustainably sourced frozen foods — driving innovation in processing and flavor to become the region's preferred choice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
