import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";

const testimonialData = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quoteKey: "quote1"
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quoteKey: "quote2"
  },
  {
    name: "Emma Rodriguez",
    role: "Tech Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    quoteKey: "quote3"
  },
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-16 md:py-28 bg-background">
      <div ref={ref} className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="section-subheader mb-4">
            ● {t("testimonials.subtitle")}
          </p>
          <h2 className="section-main-header text-[28px] md:text-[45px]">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {testimonialData.map((testimonial, index) => (
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
                "{t(`testimonials.quotes.${testimonial.quoteKey}`)}"
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
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 md:left-8 md:right-8 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};