import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import fluxenPortfolio from "@/assets/fluxen-portfolio.png";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import contabilidadeFoto from "@/assets/contabilidade-foto.png";

const projects = [
  {
    img: fluxenPortfolio,
    title: "Sistema Fluxen",
    desc: "Uma solução moderna e eficiente para gestão e automação, desenvolvida para otimizar processos e melhorar resultados.",
    link: "https://fluxen-sistema-de-vendas.vercel.app/",
    isSpecial: true,
  },
  {
    img: contabilidadeFoto,
    title: "Landing Page - Prime Contabilidade Estratégica",
    desc: "Landing page premium para escritório contábil, com design moderno, responsivo e foco em autoridade, conversão e captação de clientes.",
    link: "https://contabilidade-2-smoky.vercel.app/",
  },
  {
    img: p2,
    title: "Landing Page - Mentoria Online",
    desc: "Feita para promover o produto de mentoria online, com foco em gatilhos mentais para facilitar a venda e aumento das inscrições. Formato ideal para infoprodutores.",
  },
  {
    img: p3,
    title: "Landing Page - Empresa de Consultoria",
    desc: "Feita com o intuito de divulgar a consultoria em licitações para órgãos públicos. Desenvolvida para aumentar a captação de clientes.",
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover group bg-gradient-card border border-border/50 rounded-2xl overflow-hidden p-6"
            >
              <div className={`relative overflow-hidden rounded-xl aspect-video mb-6 ${p.isSpecial ? "ring-2 ring-primary/20 shadow-[0_30px_70px_rgba(0,0,0,0.7),0_0_30px_rgba(255,69,0,0.1)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.8),0_0_50px_rgba(255,69,0,0.4)] group-hover:-translate-y-3 transition-all duration-700 bg-black/40" : ""}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className={`w-full h-full ${p.isSpecial ? "object-contain scale-110" : "object-cover"} transition-smooth group-hover:scale-[1.15]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                {p.isSpecial && (
                  <div className="absolute inset-0 ring-1 ring-inset ring-primary/30 rounded-xl pointer-events-none" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-fire transition-smooth">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
              <Button variant="fire" size="default" className="w-full" asChild>
                <a href={p.link || "#"} target={p.link ? "_blank" : "_self"} rel="noopener noreferrer">
                  Acesse Aqui <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
