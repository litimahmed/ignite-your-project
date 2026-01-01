import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-20 left-0 pointer-events-none opacity-10">
        <span className="text-[20vw] font-display text-foreground whitespace-nowrap tracking-wider">
          CREATIVE
        </span>
      </div>

      <div
        ref={ref}
        className="container-custom pt-32 pb-16 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        {/* Left Content */}
        <div
          className={`flex-1 space-y-6 md:space-y-8 text-center lg:text-left ${isVisible ? "animate-slide-right" : "opacity-0"}`}
        >
          <div className="space-y-4">
            <p className="text-foreground text-sm md:text-base tracking-[0.2em] uppercase">
              ● {t("hero.subtitle")}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display uppercase leading-[0.95] tracking-tight">
              {t("hero.title1")}
              <br />
              <span className="text-accent">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </h1>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              className="btn-primary uppercase"
              onClick={() => scrollToSection('services')}
            >
              {t("hero.button")}
            </button>
            <span className="text-muted-foreground text-sm">
              {t("hero.or")} <span className="underline cursor-pointer hover:text-foreground transition-colors">{t("hero.viewWork")}</span>
            </span>
          </div>
        </div>

        {/* Right Content - Image with decorative elements */}
        <div
          className={`flex-1 relative ${isVisible ? "animate-slide-left" : "opacity-0"}`}
        >
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Professional development team collaborating in modern office"
                className="w-full h-[350px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32">
                <div className="absolute bottom-4 right-4 w-full h-full border-b-2 border-r-2 border-accent rounded-br-2xl" />
              </div>
            </div>

            {/* Scroll Indicator with Innovation Icon */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0">
              <button 
                onClick={() => scrollToSection('about')}
                className="group relative w-24 h-24 md:w-28 md:h-28"
              >
                {/* Rotating Text Circle */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text className="text-[8px] fill-foreground uppercase tracking-[0.2em]">
                      <textPath href="#circlePath">
                        {t("hero.scrollText")}
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};