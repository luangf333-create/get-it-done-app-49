import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Compass, X } from "lucide-react";
import { SERVICES, serviceMessage, whatsappLink } from "@/lib/site";

type Step = "start" | "service" | "done";

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("start");
  const [service, setService] = useState<string | undefined>();

  const reset = () => { setStep("start"); setService(undefined); };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div role="dialog" aria-label="Guia de atendimento" className="mb-3 w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border bg-card p-5 shadow-soft fade-up">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="eyebrow">Guia rápido</p>
              <p className="text-xs text-muted-foreground">Um atalho para encontrar o que precisa.</p>
            </div>
            <button aria-label="Fechar guia" onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-muted"><X className="size-4" /></button>
          </div>
          {step === "start" && (
            <div className="space-y-2">
              <p className="font-display text-xl">O que você procura?</p>
              <button className="w-full rounded-xl border px-4 py-3 text-left text-sm hover:border-primary" onClick={() => setStep("service")}>Conhecer um serviço</button>
              <Link to="/espaco" onClick={() => setOpen(false)} className="block rounded-xl border px-4 py-3 text-sm hover:border-primary">Ver o espaço e o Pet Trailer</Link>
              <Link to="/contato" onClick={() => setOpen(false)} className="block rounded-xl border px-4 py-3 text-sm hover:border-primary">Endereço e como chegar</Link>
            </div>
          )}
          {step === "service" && (
            <div>
              <p className="mb-3 font-display text-xl">Qual serviço?</p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button key={s.id} onClick={() => { setService(s.name); setStep("done"); }} className="rounded-full border px-3 py-1.5 text-xs hover:border-primary">{s.name}</button>
                ))}
              </div>
            </div>
          )}
          {step === "done" && service && (
            <div className="space-y-3">
              <p className="font-display text-xl">{service}</p>
              <p className="text-sm text-muted-foreground">Valores e disponibilidade são informados pela equipe. Você pode revisar a mensagem antes de enviar.</p>
              <a href={whatsappLink(serviceMessage(service))} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-whatsapp px-4 py-3 text-center text-sm font-semibold text-whatsapp-foreground">Falar sobre {service.toLowerCase()}</a>
              <Link to="/servicos" onClick={() => setOpen(false)} className="block text-center text-sm underline">Ver todos os serviços</Link>
            </div>
          )}
          {step !== "start" && <button onClick={reset} className="mt-4 text-xs text-muted-foreground underline">Recomeçar</button>}
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="ml-auto flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-ink-foreground shadow-soft hover:bg-primary">
        <Compass className="size-4" aria-hidden /> {open ? "Fechar" : "Precisa de ajuda?"}
      </button>
    </div>
  );
}
