import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero, SiteLayout, WhatsAppButton } from "@/components/site/Layout";
import { CATEGORIES, SERVICES, serviceMessage } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de banho e tosa — Banho & Tosa Carioca" },
      { name: "description", content: "Banho, hidratação, escovação, limpeza de ouvidos, corte de unhas e tosas higiênica, máquina, tesoura e trimming em Botafogo." },
      { property: "og:title", content: "Serviços — Banho & Tosa Carioca" },
      { property: "og:description", content: "Conheça os serviços de banho e tosa em Botafogo e fale com a equipe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  const [cat, setCat] = useState<"all" | "higiene" | "tosa">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const list = SERVICES.filter((s) => cat === "all" || s.category === cat);
  return (
    <SiteLayout>
      <PageHero eyebrow="Serviços" title={<>Cuidados completos, <em className="text-primary">um de cada vez.</em></>} intro="Escolha um serviço para ver detalhes e falar com a equipe. Valores, duração e disponibilidade são informados diretamente pelo WhatsApp." />
      <section className="container-x pb-24">
        <div role="tablist" aria-label="Categorias" className="mb-8 flex flex-wrap gap-2">
          {[{ id: "all", label: "Todos" }, ...CATEGORIES].map((c) => (
            <button key={c.id} role="tab" aria-selected={cat === c.id} onClick={() => setCat(c.id as typeof cat)} className={`rounded-full border px-5 py-2 text-sm font-medium ${cat === c.id ? "border-ink bg-ink text-ink-foreground" : "hover:border-foreground"}`}>{c.label}</button>
          ))}
        </div>
        <ul className="divide-y border-y">
          {list.map((s) => {
            const open = openId === s.id;
            return (
              <li key={s.id}>
                <button onClick={() => setOpenId(open ? null : s.id)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-6 text-left">
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{CATEGORIES.find((c) => c.id === s.category)?.label}</span>
                    <span className="font-display text-2xl md:text-3xl">{s.name}</span>
                  </span>
                  <ChevronDown className={`size-5 shrink-0 transition ${open ? "rotate-180" : ""}`} aria-hidden />
                </button>
                {open && (
                  <div className="fade-up flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-xl text-muted-foreground">{s.description}</p>
                    <WhatsAppButton message={serviceMessage(s.name)}>Perguntar sobre {s.name.toLowerCase()}</WhatsAppButton>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">Produtos utilizados incluem a linha Dolce Pet, conforme material institucional. Disponibilidade sujeita a confirmação.</p>
      </section>
    </SiteLayout>
  );
}
