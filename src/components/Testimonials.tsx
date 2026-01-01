import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", { returnObjects: true }) as Array<{
    quote: string;
    name: string;
    role: string;
    image: string;
  }>;

  return (
    <section id="testimonials" className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4">
            ● {t("testimonials.subtitle")}
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px]">
            {t("testimonials.titleStart")} <span className="text-accent">{t("testimonials.titleHighlight")}</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-secondary rounded-2xl p-6 md:p-8 pb-24 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 md:mb-6">
                <Quote className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              </div>

              {/* Quote Text */}
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Client Info - Positioned at bottom */}
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display text-sm md:text-base uppercase text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line - separate from client info */}
              <div className="absolute bottom-0 left-6 right-6 md:left-8 md:right-8 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};