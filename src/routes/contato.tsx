import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { RequestBuilder } from "@/components/site/RequestBuilder";
import { SITE, serviceMessage, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e localização — Banho & Tosa Carioca" },
      { name: "description", content: "Rua Visconde Silva, 80, Botafogo, Rio de Janeiro. Fale pelo WhatsApp (21) 96565-0406 ou veja como chegar." },
      { property: "og:title", content: "Contato — Banho & Tosa Carioca" },
      { property: "og:description", content: "Endereço em Botafogo, WhatsApp e mapa para chegar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  const items = [
    { icon: MapPin, t: "Endereço", d: SITE.address, sub: SITE.addressRef, href: SITE.mapsUrl, cta: "Abrir no Google Maps" },
    { icon: MessageCircle, t: "WhatsApp", d: SITE.whatsappDisplay, href: whatsappLink(serviceMessage()), cta: "Iniciar conversa" },
    { icon: Instagram, t: "Instagram", d: SITE.instagramHandle, href: SITE.instagram, cta: "Ver perfil" },
    { icon: Clock, t: "Horários", d: SITE.hours ?? "Consulte pelo WhatsApp" },
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="Contato" title={<>Venha nos <em className="text-primary">conhecer.</em></>} />
      <section className="container-x grid gap-8 pb-16 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: I, t, d, sub, href, cta }) => (
            <div key={t} className="rounded-2xl border bg-card p-6">
              <I className="size-5 text-accent" aria-hidden />
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{t}</p>
              <p className="mt-1 font-semibold">{d}</p>
              {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
              {href && <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary underline">{cta}</a>}
            </div>
          ))}
        </div>
        <iframe title="Mapa: Banho & Tosa Carioca em Botafogo" src={SITE.mapsEmbed} loading="lazy" className="min-h-80 w-full rounded-2xl border" referrerPolicy="no-referrer-when-downgrade" />
      </section>
      <section className="container-x pb-24">
        <h2 className="mb-8 text-4xl">Monte sua solicitação</h2>
        <RequestBuilder />
      </section>
    </SiteLayout>
  );
}
