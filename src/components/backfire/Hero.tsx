import { WhatsAppIcon } from "./WhatsAppIcon";
import { Button } from "@/components/ui/button";
import heroLaptop from "@/assets/hero-laptop.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #0F0F10 0%, #1A1A1D 60%, #0F0F10 100%)",
      }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-radial-fire" aria-hidden />
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/25 blur-[140px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--primary-glow)]/15 blur-[120px] animate-pulse-glow"
        aria-hidden
      />
      {/* Subtle particles */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #FF7A00 1px, transparent 2px), radial-gradient(circle at 75% 60%, #FF4500 1px, transparent 2px), radial-gradient(circle at 50% 80%, #FFFFFF 1px, transparent 2px)",
          backgroundSize: "120px 120px, 200px 200px, 160px 160px",
        }}
        aria-hidden
      />

      <div className="container relative mx-auto px-6 grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-block px-5 py-2 mb-6 rounded-full border-2 border-primary text-primary text-sm font-semibold animate-pulse-glow">
            ⭐ Prime Contabilidade Estratégica
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Landing page premium para escritório contábil
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Design moderno, responsivo e com foco em autoridade, conversão e captação de clientes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a 
                href="https://wa.me/5569999627328?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." 
                target="_blank" 
                rel="noreferrer"
              >
                <WhatsAppIcon className="w-6 h-6 mr-2" />
                Solicitar Orçamento Grátis
              </a>
            </Button>
            <Button variant="outlineFire" size="xl" asChild>
              <a href="#portfolio">Ver Portfólio</a>
            </Button>
          </div>
        </div>

        <div
          className="relative group animate-slide-in-right"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          {/* Glow halo behind laptop */}
          <div
            className="absolute inset-0 bg-gradient-fire blur-[100px] opacity-40 rounded-full scale-90"
            aria-hidden
          />
          <div
            className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full animate-pulse-glow"
            aria-hidden
          />

          <div
            className="relative animate-float transition-bounce group-hover:[transform:perspective(1200px)_rotateY(-6deg)_rotateX(2deg)_scale(1.02)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={heroLaptop}
              alt="Notebook moderno exibindo landing page premium criada pela BackFire"
              width={1536}
              height={1152}
              fetchPriority="high"
              className="relative w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)] drop-shadow-[0_0_60px_rgba(255,69,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
