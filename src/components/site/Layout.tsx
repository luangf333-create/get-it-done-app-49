import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Instagram, MapPin } from "lucide-react";
import { SITE, whatsappLink, serviceMessage } from "@/lib/site";
import { Assistant } from "./Assistant";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/espaco", label: "Nosso espaço" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/contato", label: "Contato" },
] as const;

export function WhatsAppButton({ message, children, className = "" }: { message?: string; children?: ReactNode; className?: string }) {
  return (
    <a
      href={whatsappLink(message ?? serviceMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      <MessageCircle className="size-4" aria-hidden />
      {children ?? "Falar no WhatsApp"}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-background/90 shadow-soft backdrop-blur" : "bg-background"}`}>
      <div className={`container-x flex items-center justify-between transition-all ${scrolled ? "h-16" : "h-20"}`}>
        <Link to="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl text-primary">Banho & Tosa</span>
          <span className="font-display text-2xl italic text-accent">Carioca</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <WhatsAppButton className="py-2.5">WhatsApp</WhatsAppButton>
        </nav>
        <button className="rounded-full p-2 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 border-t bg-background pb-6 pt-3 lg:hidden" aria-label="Menu móvel">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 font-display text-2xl">
              {n.label}
            </Link>
          ))}
          <WhatsAppButton className="mt-3">Falar no WhatsApp</WhatsAppButton>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">Banho & Tosa <em className="text-accent">Carioca</em></p>
          <p className="mt-3 max-w-xs text-sm opacity-70">Cuidado, transparência e carinho com o seu pet, em Botafogo.</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Onde estamos</p>
          <p className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5" aria-hidden />{SITE.address}</p>
          <p className="mt-1 opacity-70">{SITE.addressRef}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow">Contato</p>
          <a href={whatsappLink(serviceMessage())} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp {SITE.whatsappDisplay}</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><Instagram className="size-4" aria-hidden />{SITE.instagramHandle}</a>
        </div>
      </div>
      <div className="container-x border-t border-ink-foreground/10 py-6 text-xs opacity-60">
        © {new Date().getFullYear()} {SITE.name}. Imagens ilustrativas — serão substituídas por fotos reais do espaço.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-3">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" className="flex-1">{children}</main>
      <Footer />
      <Assistant />
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="container-x pb-12 pt-16 md:pt-24">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="fade-up mt-4 max-w-4xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
      {intro && <p className="fade-up mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </section>
  );
}
