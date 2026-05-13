import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import fluxenPortfolio from "@/assets/fluxen-portfolio.png";
import siteLaMelanina from "@/assets/site lamelanina.png";
import nobleHausImg from "@/assets/imobiliaria.png";

const projects = [
  {
    img: fluxenPortfolio,
    title: "Sistema Fluxen",
    desc: "Uma solução moderna e eficiente para gestão e automação, desenvolvida para otimizar processos e melhorar resultados.",
    link: "https://fluxen-sistema-de-vendas.vercel.app/",
  },
  {
    img: nobleHausImg,
    title: "NobleHaus — Imóveis de Alto Padrão",
    desc: "Landing page premium para imobiliária de alto padrão, com design sofisticado, experiência elegante e foco em exclusividade.",
    link: "https://noblehausbeta.vercel.app/",
  },
  {
    img: siteLaMelanina,
    title: "La Melanina Bronzeamento Premium",
    desc: "Landing page elegante e responsiva desenvolvida para estúdio de bronzeamento premium, com design sofisticado, foco em conversão, experiência moderna e agendamento online.",
    link: "https://la-melanina.vercel.app/#inicio",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gradient-fire px-8 py-3 border-2 border-primary rounded-2xl">
            PORTFÓLIO
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Veja alguns projetos desenvolvidos que geram{" "}
            <span className="text-gradient-fire font-semibold">vendas</span> e{" "}
            <span className="text-gradient-fire font-semibold">clientes</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 justify-items-center">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover group bg-gradient-card border border-border/50 rounded-2xl overflow-hidden p-6 flex flex-col h-full transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-xl h-[240px] mb-6 bg-black/40 transition-smooth border border-white/5">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-fire transition-smooth">
                {p.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-4">
                {p.desc}
              </p>

              <div className="mt-6">
                <Button variant="fire" size="default" className="w-full" asChild>
                  <a
                    href={p.link || "#"}
                    target={p.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    Acesse Aqui <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
