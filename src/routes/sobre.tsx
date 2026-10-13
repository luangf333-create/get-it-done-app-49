import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout, WhatsAppButton } from "@/components/site/Layout";
import { IMG } from "@/lib/photos";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Banho & Tosa Carioca, Botafogo" },
      { name: "description", content: "Conheça o Banho & Tosa Carioca: ambiente familiar e acolhedor em Botafogo, com foco em transparência e cuidado." },
      { property: "og:title", content: "Sobre o Banho & Tosa Carioca" },
      { property: "og:description", content: "Ambiente familiar, acolhedor e transparente para o seu pet em Botafogo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Sobre nós" title={<>Um cantinho de Botafogo <em className="text-primary">feito para pets.</em></>} />
      <section className="container-x grid gap-12 pb-24 md:grid-cols-2">
        <img src={IMG.tosa} alt="Pet sendo escovado com carinho (imagem ilustrativa)" width={1008} height={1200} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
        <div className="space-y-6 self-center text-lg text-muted-foreground">
          <p>O Banho & Tosa Carioca é um espaço familiar, acolhedor, espaçoso e bem arejado, na esquina da Rua Visconde Silva com a Rua Conde de Irajá.</p>
          <p>Nosso jeito de trabalhar é simples: tratar cada pet com paciência e deixar o tutor por perto. Por isso criamos o Pet Trailer, para que você acompanhe o atendimento com tranquilidade.</p>
          <p>Trabalhamos com produtos Dolce Pet e uma rotina de cuidados que vai do banho ao acabamento na tesoura.</p>
          <WhatsAppButton />
        </div>
      </section>
    </SiteLayout>
  );
}
