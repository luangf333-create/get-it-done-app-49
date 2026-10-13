import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, MapPin, Scissors, Sparkles } from "lucide-react";
import { SiteLayout, WhatsAppButton } from "@/components/site/Layout";
import { Gallery } from "@/components/site/Gallery";
import { RequestBuilder } from "@/components/site/RequestBuilder";
import { IMG, PHOTOS } from "@/lib/photos";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banho & Tosa Carioca — Banho e tosa em Botafogo, RJ" },
      { name: "description", content: "Banho, tosa e cuidados para o seu pet em Botafogo, com o conceito Pet Trailer: você acompanha tudo de perto. Fale pelo WhatsApp." },
      { property: "og:title", content: "Banho & Tosa Carioca — Botafogo, RJ" },
      { property: "og:description", content: "Banho, tosa e cuidado transparente em Botafogo. Conheça o Pet Trailer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="container-x grid items-center gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow fade-up">Banho & tosa · Botafogo, RJ</p>
          <h1 className="fade-up mt-5 text-5xl leading-[1.02] md:text-7xl">
            Cuidado de perto, <em className="text-primary">do jeito carioca.</em>
          </h1>
          <p className="fade-up mt-6 max-w-lg text-lg text-muted-foreground">
            Um espaço familiar, arejado e transparente, onde você pode acompanhar cada etapa do banho e da tosa do seu pet.
          </p>
          <div className="fade-up mt-9 flex flex-wrap gap-3">
            <Link to="/servicos" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground hover:bg-primary">
              Conhecer os serviços <ArrowRight className="size-4" aria-hidden />
            </Link>
            <WhatsAppButton>Falar com a equipe</WhatsAppButton>
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <img src={IMG.hero} alt="Cachorro feliz enrolado em toalha após o banho (imagem ilustrativa)" width={1600} height={1104} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft md:aspect-[5/4]" />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft">
            <Eye className="size-5 text-accent" aria-hidden />
            <p className="text-sm"><strong>Pet Trailer</strong><br /><span className="text-muted-foreground">transparência em cada etapa</span></p>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, t: "Botafogo", d: "Rua Visconde Silva, 80" },
            { icon: Sparkles, t: "Banho e higiene", d: "Banho, hidratação, unhas e mais" },
            { icon: Scissors, t: "Tosagem", d: "Higiênica, máquina, tesoura, trimming" },
            { icon: Eye, t: "Pet Trailer", d: "Acompanhe o atendimento" },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <I className="mt-1 size-5 text-primary" aria-hidden />
              <div><p className="font-semibold">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">Do banho ao acabamento na tesoura.</h2>
          </div>
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Ver catálogo completo <ArrowRight className="size-4" /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { img: IMG.banho, t: "Banho e higiene", cat: "higiene" },
            { img: IMG.tosa, t: "Tosagem", cat: "tosa" },
          ].map((c) => (
            <Link key={c.t} to="/servicos" className="group relative overflow-hidden rounded-[2rem]">
              <img src={c.img} alt={`${c.t} (imagem ilustrativa)`} width={1008} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 p-8 text-ink-foreground">
                <h3 className="text-3xl">{c.t}</h3>
                <p className="mt-2 text-sm opacity-80">{SERVICES.filter((s) => s.category === c.cat).map((s) => s.name).join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
          <img src={IMG.trailer} alt="Interior de um pet trailer com mesa de tosa e janela ampla (imagem ilustrativa)" width={1408} height={1008} loading="lazy" className="rounded-[2rem]" />
          <div>
            <p className="eyebrow">Nosso diferencial</p>
            <h2 className="mt-3 text-4xl md:text-6xl">Pet Trailer: <em className="text-accent">nada a esconder.</em></h2>
            <p className="mt-6 text-lg opacity-80">Acreditamos que confiança se constrói com transparência. No Pet Trailer, o tutor pode acompanhar de perto os procedimentos realizados no seu animal.</p>
            <Link to="/espaco" className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-ink-foreground/10">Conhecer o espaço <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <p className="eyebrow">Galeria</p>
        <h2 className="mb-10 mt-3 text-4xl md:text-5xl">Um pouco do nosso dia a dia.</h2>
        <Gallery photos={PHOTOS} />
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm font-semibold text-primary underline">Mais no Instagram {SITE.instagramHandle}</a>
      </section>

      <section className="container-x pb-24">
        <p className="eyebrow">Pré-atendimento</p>
        <h2 className="mb-10 mt-3 max-w-2xl text-4xl md:text-5xl">Monte sua solicitação em um minuto.</h2>
        <RequestBuilder />
      </section>
    </SiteLayout>
  );
}
