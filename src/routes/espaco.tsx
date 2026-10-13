import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout, WhatsAppButton } from "@/components/site/Layout";
import { Gallery } from "@/components/site/Gallery";
import { IMG, PHOTOS } from "@/lib/photos";

export const Route = createFileRoute("/espaco")({
  head: () => ({
    meta: [
      { title: "Nosso espaço e o Pet Trailer — Banho & Tosa Carioca" },
      { name: "description", content: "Um ambiente familiar, espaçoso e arejado em Botafogo. Conheça o Pet Trailer, onde o tutor acompanha o atendimento de perto." },
      { property: "og:title", content: "Pet Trailer — Banho & Tosa Carioca" },
      { property: "og:description", content: "Transparência no banho e na tosa: acompanhe de perto o cuidado com seu pet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Espaco,
});

function Espaco() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Nosso espaço" title={<>Transparência que você <em className="text-primary">pode ver.</em></>} intro="Um ambiente familiar, acolhedor, espaçoso e bem arejado — pensado para o conforto dos pets e a tranquilidade dos tutores." />
      <section className="container-x grid gap-12 pb-20 lg:grid-cols-12">
        <img src={IMG.trailer} alt="Interior de pet trailer (imagem ilustrativa)" width={1408} height={1008} className="rounded-[2rem] lg:col-span-7" />
        <div className="space-y-8 lg:col-span-5">
          {[
            { n: "01", t: "Você acompanha", d: "O conceito Pet Trailer permite que o tutor veja de perto os procedimentos realizados." },
            { n: "02", t: "Ambiente arejado", d: "Espaço amplo e ventilado, para que o pet fique mais à vontade." },
            { n: "03", t: "Clima familiar", d: "Atendimento próximo, com carinho e atenção a cada animal." },
          ].map((i) => (
            <div key={i.n} className="flex gap-5 border-b pb-6">
              <span className="font-display text-3xl text-accent">{i.n}</span>
              <div><h2 className="text-2xl">{i.t}</h2><p className="mt-1 text-muted-foreground">{i.d}</p></div>
            </div>
          ))}
          <WhatsAppButton message="Olá! Vi o Pet Trailer no site e gostaria de saber como funciona o acompanhamento.">Perguntar sobre o Pet Trailer</WhatsAppButton>
        </div>
      </section>
      <section className="container-x pb-24">
        <h2 className="mb-8 text-4xl">Conheça o espaço</h2>
        <Gallery photos={PHOTOS} />
        <p className="mt-4 text-xs text-muted-foreground">Imagens ilustrativas. As fotos reais do estabelecimento serão adicionadas em breve.</p>
      </section>
    </SiteLayout>
  );
}
