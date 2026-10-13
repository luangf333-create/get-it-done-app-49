export const SITE = {
  name: "Banho & Tosa Carioca",
  whatsappNumber: "5521965650406",
  whatsappDisplay: "(21) 96565-0406",
  instagram: "https://www.instagram.com/btcarioca/",
  instagramHandle: "@btcarioca",
  address: "Rua Visconde Silva, 80 — Botafogo, Rio de Janeiro/RJ",
  addressRef: "Esquina com a Rua Conde de Irajá, anexo a um posto de gasolina",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Visconde+Silva+80+Botafogo+Rio+de+Janeiro",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Visconde+Silva+80+Botafogo+Rio+de+Janeiro&output=embed",
  // Horários ainda não confirmados pelo proprietário — manter nulo até confirmação.
  hours: null as string | null,
};

export type Service = { id: string; name: string; category: "higiene" | "tosa"; description: string };

export const SERVICES: Service[] = [
  { id: "banho", name: "Banho", category: "higiene", description: "Limpeza completa da pelagem com secagem cuidadosa, respeitando o ritmo de cada pet." },
  { id: "hidratacao", name: "Hidratação", category: "higiene", description: "Tratamento para devolver maciez e brilho à pelagem." },
  { id: "dentes", name: "Escovação de dentes", category: "higiene", description: "Cuidado complementar com a higiene bucal do seu pet." },
  { id: "ouvidos", name: "Limpeza de ouvidos", category: "higiene", description: "Higienização delicada da região externa dos ouvidos." },
  { id: "unhas", name: "Corte de unhas", category: "higiene", description: "Unhas aparadas para mais conforto ao caminhar." },
  { id: "tosa-higienica", name: "Tosa higiênica", category: "tosa", description: "Aparo das regiões íntimas, patas e áreas sensíveis." },
  { id: "tosa-maquina", name: "Tosa na máquina", category: "tosa", description: "Corte uniforme e prático, feito com máquina." },
  { id: "tosa-tesoura", name: "Tosa na tesoura", category: "tosa", description: "Acabamento manual e detalhado, com atenção ao formato." },
  { id: "trimming", name: "Tosa trimming", category: "tosa", description: "Técnica específica para raças de pelagem dura." },
];

export const CATEGORIES = [
  { id: "higiene", label: "Banho e higiene" },
  { id: "tosa", label: "Tosagem" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(serviceName?: string) {
  return serviceName
    ? `Olá! Conheci o Banho & Tosa Carioca pelo site e gostaria de saber mais sobre o serviço de ${serviceName.toLowerCase()}.`
    : "Olá! Conheci o Banho & Tosa Carioca pelo site e gostaria de mais informações.";
}

export type RequestData = {
  tutor?: string;
  pet?: string;
  species?: string;
  services?: string[];
  notes?: string;
};

export function buildRequestMessage(d: RequestData) {
  const lines = ["Olá! Vim pelo site do Banho & Tosa Carioca e gostaria de solicitar um atendimento."];
  if (d.tutor?.trim()) lines.push(`Tutor(a): ${d.tutor.trim()}`);
  if (d.pet?.trim()) lines.push(`Pet: ${d.pet.trim()}`);
  if (d.species?.trim()) lines.push(`Tipo de animal: ${d.species.trim()}`);
  if (d.services?.length) lines.push(`Serviço(s): ${d.services.join(", ")}`);
  if (d.notes?.trim()) lines.push(`Observações: ${d.notes.trim()}`);
  lines.push("Poderiam me informar disponibilidade e valores?");
  return lines.join("\n");
}
