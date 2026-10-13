import { useState } from "react";
import { SERVICES, buildRequestMessage, whatsappLink } from "@/lib/site";

const field = "w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-2 focus:outline-ring";

export function RequestBuilder() {
  const [tutor, setTutor] = useState("");
  const [pet, setPet] = useState("");
  const [species, setSpecies] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const msg = buildRequestMessage({ tutor, pet, species, services, notes });
  const toggle = (n: string) => setServices((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));

  return (
    <div className="grid gap-8 rounded-3xl border bg-card p-6 shadow-soft md:grid-cols-2 md:p-10">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(whatsappLink(msg), "_blank", "noopener"); }}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">Seu nome <span className="text-muted-foreground">(opcional)</span><input className={`${field} mt-1.5`} value={tutor} onChange={(e) => setTutor(e.target.value)} maxLength={60} /></label>
          <label className="text-sm font-medium">Nome do pet <span className="text-muted-foreground">(opcional)</span><input className={`${field} mt-1.5`} value={pet} onChange={(e) => setPet(e.target.value)} maxLength={40} /></label>
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Tipo de animal</legend>
          <div className="mt-2 flex gap-2">
            {["Cachorro", "Gato", "Outro"].map((s) => (
              <button type="button" key={s} aria-pressed={species === s} onClick={() => setSpecies(species === s ? "" : s)} className={`rounded-full border px-4 py-2 text-sm ${species === s ? "border-primary bg-primary text-primary-foreground" : ""}`}>{s}</button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-medium">Serviços de interesse</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <button type="button" key={s.id} aria-pressed={services.includes(s.name)} onClick={() => toggle(s.name)} className={`rounded-full border px-3 py-1.5 text-xs ${services.includes(s.name) ? "border-primary bg-primary text-primary-foreground" : ""}`}>{s.name}</button>
            ))}
          </div>
        </fieldset>
        <label className="block text-sm font-medium">Observações <span className="text-muted-foreground">(ex.: porte, temperamento)</span>
          <textarea className={`${field} mt-1.5 min-h-24`} value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={400} />
        </label>
        <button type="submit" className="w-full rounded-full bg-whatsapp px-6 py-4 font-semibold text-whatsapp-foreground hover:brightness-110">Revisar e abrir no WhatsApp</button>
        <p className="text-xs text-muted-foreground">Nada é salvo ou enviado automaticamente. Este é um pedido de contato — o horário é confirmado pela equipe.</p>
      </form>
      <div className="rounded-2xl bg-sand/60 p-6">
        <p className="eyebrow mb-3">Prévia da mensagem</p>
        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{msg}</pre>
      </div>
    </div>
  );
}
