import { Globe, LayoutTemplate, BriefcaseBusiness } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de sites institucionais",
    sub: "Ideal para empresas e escritórios",
    desc: "Desenvolvimento de páginas que comunicam a identidade da empresa de forma clara e atrativa. Seu negócio ganha mais autoridade e destaque no ambiente online.",
    price: "10x de R$ 176,90",
    fullPrice: "ou R$ 1.497 à vista",
    linkWhatsApp: "https://wa.me/5569999627328?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20desenvolvimento%20de%20um%20site%20institucional.",
  },
  {
    icon: LayoutTemplate,
    title: "Desenvolvimento de landing pages",
    sub: "Ideal para infoprodutos e pequenos negócios",
    desc: "Página única que é pensada para captar a atenção do visitante e guiá-lo até a ação desejada. Assim, sua empresa conquista mais resultados em campanhas digitais.",
    price: "10x de R$ 111,90",
    fullPrice: "ou R$ 950 à vista",
    linkWhatsApp: "https://wa.me/5569999627328?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20desenvolvimento%20de%20uma%20landing%20page.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Desenvolvimento de portfólio Profissional",
    sub: "Ideal para profissionais autônomos",
    desc: "Página única com o objetivo de atrair e engajar potenciais clientes de forma intuitiva e facilitar agendamentos. Potencialize a captação de novos projetos.",
    price: "10x de R$ 111,90",
    fullPrice: "ou R$ 950 à vista",
    linkWhatsApp: "https://wa.me/5569999627328?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20desenvolvimento%20de%20um%20portf%C3%B3lio%20profissional.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-28 relative">
      <div className="absolute inset-0 bg-radial-fire opacity-50" aria-hidden />
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gradient-fire px-8 py-3 border-2 border-primary rounded-2xl">
            SERVIÇOS
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Grandes resultados, com um ótimo{" "}
            <span className="text-gradient-fire font-semibold">custo-benefício</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="card-hover bg-gradient-card border border-border/50 rounded-2xl p-8 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">{s.title}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{s.sub}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>

                <div className="border-t border-border/40 pt-5 mb-5">
                  <p className="text-xs text-muted-foreground">À partir de</p>
                  <p className="text-2xl font-bold text-gradient-fire">{s.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.fullPrice}</p>
                </div>

                <Button variant="hero" size="lg" asChild>
                  <a
                    href={s.linkWhatsApp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Solicitar Orçamento Grátis
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}