import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Clock,
  Sparkles,
  Smile,
  Stethoscope,
  Scissors,
  ShieldCheck,
  Baby,
  Instagram,
} from "lucide-react";


import portrait from "@/assets/IMG_1688.jpeg.asset.json";
import clinical from "@/assets/IMG_1687.jpeg.asset.json";
import beforeAfter from "@/assets/IMG_1685.jpeg.asset.json";
import painPhoto from "@/assets/IMG_1683.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Jonatas Munhoz | Dentista em Paraguaçu Paulista" },
      {
        name: "description",
        content:
          "Lentes de contato dental, clareamento, implantes e cirurgia em Paraguaçu Paulista. Agende sua avaliação pelo WhatsApp com o Dr. Jonatas Munhoz.",
      },
      {
        property: "og:title",
        content: "Dr. Jonatas Munhoz | Dentista em Paraguaçu Paulista",
      },
      {
        property: "og:description",
        content:
          "Odontologia estética e cirurgia com atendimento humanizado. CRO-SP 176.816. Agende pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP =
  "https://wa.me/5518996164616?text=Ol%C3%A1%2C%20Dr.%20Jonatas!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const ADDRESS = "Rua Prefeito Jaime Monteiro, 357, Paraguaçu Paulista - SP";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Rua+Prefeito+Jaime+Monteiro,+357,+Paragua%C3%A7u+Paulista+-+SP";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua%20Prefeito%20Jaime%20Monteiro%2C%20357%2C%20Paragua%C3%A7u%20Paulista%20-%20SP&z=16&output=embed";

const services = [
  {
    icon: Sparkles,
    title: "Lentes de contato dental",
    text: "Desenho de sorriso natural, planejado digitalmente para o seu rosto.",
  },
  {
    icon: Smile,
    title: "Clareamento dental",
    text: "Dentes mais claros com protocolo seguro e sem sensibilidade excessiva.",
  },
  {
    icon: Stethoscope,
    title: "Implantes e próteses",
    text: "Reabilitação de dentes ausentes com função e estética devolvidas.",
  },
  {
    icon: Scissors,
    title: "Cirurgia e extrações",
    text: "Sisos e cirurgias com técnica minimamente traumática.",
  },
  {
    icon: ShieldCheck,
    title: "Urgência odontológica",
    text: "Dor de dente não espera: atendimento rápido para aliviar a dor.",
  },
  {
    icon: Baby,
    title: "Prevenção e limpeza",
    text: "Profilaxia, restaurações e acompanhamento para toda a família.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <span className="font-display text-xl tracking-[0.12em] text-gold">
            Dr. Jonatas Munhoz
          </span>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#tratamentos" className="hover:text-primary">
              Tratamentos
            </a>
            <a href="#sobre" className="hover:text-primary">
              Sobre
            </a>
            <a href="#resultados" className="hover:text-primary">
              Resultados
            </a>
            <a href="#local" className="hover:text-primary">
              Localização
            </a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-primary/60 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={portrait.url}
          alt="Dr. Jonatas Munhoz em seu consultório odontológico"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Cirurgião Dentista · CRO-SP 176.816
          </p>
          <h1 className="mt-6 text-4xl leading-[1.1] md:text-6xl">
            Um sorriso que combina com você,
            <span className="text-gold"> com técnica e cuidado</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Odontologia estética, cirurgia e reabilitação em Paraguaçu Paulista. Avaliação
            personalizada, plano de tratamento claro e atendimento sem julgamentos.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm bg-primary px-7 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="w-full rounded-sm border border-border px-7 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary/60 sm:w-auto"
            >
              Ver tratamentos
            </a>
          </div>
          <div className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>Planejamento digital</span>
            <span>Atendimento humanizado</span>
            <span>Urgências</span>
          </div>
        </div>
      </section>

      {/* Dor / urgência */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <img
            src={painPhoto.url}
            alt="Paciente com dor de dente"
            className="h-80 w-full rounded-sm object-cover object-[center_30%] md:h-[28rem] md:object-[center_35%]"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">Está com dor ou insegurança com o sorriso?</h2>
            <div className="hairline my-6 w-24" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Muita gente convive anos com dor, dente quebrado ou vergonha de sorrir por medo
              do dentista. Aqui o primeiro passo é simples: você conta o que incomoda, eu
              explico as opções, os prazos e os valores antes de qualquer procedimento.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/90">
              <li>· Avaliação completa com diagnóstico explicado</li>
              <li>· Anestesia confortável e técnica minimamente invasiva</li>
              <li>· Parcelamento e prioridade para casos de urgência</li>
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-sm bg-primary px-7 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Falar agora no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Tratamentos</p>
        <h2 className="mt-4 max-w-xl text-3xl md:text-4xl">
          Cuidado completo, do alívio da dor ao sorriso planejado
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card p-7">
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Resultados</p>
            <h2 className="mt-4 text-3xl md:text-4xl">Antes e depois reais</h2>
            <div className="hairline my-6 w-24" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cada caso é planejado individualmente, respeitando o formato do rosto, a gengiva
              e a função da mordida. O resultado precisa parecer natural — e durar.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-sm border border-primary/60 px-7 py-4 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Quero um orçamento
            </a>
          </div>
          <img
            src={beforeAfter.url}
            alt="Antes e depois de reabilitação estética do sorriso"
            className="w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <img
          src={clinical.url}
          alt="Dr. Jonatas Munhoz realizando procedimento odontológico"
          className="h-80 w-full rounded-sm object-cover md:h-[30rem]"
          loading="lazy"
        />
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Quem atende você</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Dr. Jonatas Munhoz</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Cirurgião Dentista · CRO-SP 176.816
          </p>
          <div className="hairline my-6 w-24" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Atendimento em Paraguaçu Paulista com foco em estética dental, cirurgia e
            reabilitação. Formação em constante atualização, uso de tecnologia para
            planejamento do sorriso e uma conduta simples: explicar tudo com clareza e
            respeitar o tempo de cada paciente.
          </p>
          <p className="mt-8 font-display text-2xl tracking-[0.1em] text-gold">
            Dr. Jonatas Munhoz
          </p>
        </div>
      </section>

      {/* Localização */}
      <section id="local" className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Localização</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Venha nos visitar</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.25} />
                <div>
                  <p className="text-foreground">{ADDRESS}</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-primary underline-offset-4 hover:underline"
                  >
                    Abrir rota no Google Maps
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.25} />
                <div>
                  <p className="text-foreground">(18) 99616-4616</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-primary underline-offset-4 hover:underline"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.25} />
                <div className="text-muted-foreground">
                  <p className="text-foreground">Segunda a sexta · 08h às 18h</p>
                  <p>Sábado sob agendamento</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Mapa do consultório do Dr. Jonatas Munhoz"
                src={MAPS_EMBED}
                className="h-80 w-full md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-12 text-center">
          <p className="font-display text-2xl tracking-[0.1em] text-gold">
            Dr. Jonatas Munhoz
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            CRO-SP 176.816 · Paraguaçu Paulista / SP
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.25} /> Instagram
          </a>
          <p className="text-[11px] text-muted-foreground/70">
            © {new Date().getFullYear()} Dr. Jonatas Munhoz. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* CTA fixo */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-primary px-6 py-4 text-xs uppercase tracking-[0.18em] text-primary-foreground shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
