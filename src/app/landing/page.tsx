"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerChildren
} from "@/lib/motion";
import {
  CheckCircle2,
  Clock,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useMemo } from "react";

const painPoints = [
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Falta de tempo",
    description: "Rituais curtos que cabem no seu dia sem virar obrigação."
  },
  {
    icon: <MessageCircleHeart className="h-6 w-6 text-secondary" />,
    title: "Distância emocional",
    description: "Prompts guiados que destravam conversas profundas."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-primary" />,
    title: "Discussões repetitivas",
    description: "Método prático para reconectar sem precisar de terapia."
  }
];

const deliverables = [
  "Webook digital com +1.000 receitas de amor.",
  "Planos práticos de 7 / 14 / 30 dias.",
  "100 mensagens de carinho prontas para usar.",
  "Roteiro de reconciliação.",
  "Acesso vitalício à Dashboard exclusiva."
];

const testimonials = [
  {
    name: "Ana & Rodrigo",
    quote:
      "Faz 10 anos que estamos juntos e nunca nos comunicamos tão bem.",
    role: "Casados há 10 anos"
  },
  {
    name: "Camila & Rafael",
    quote:
      "As tarefas diárias são simples, mas o impacto é gigante.",
    role: "Após 14 dias de desafios"
  },
  {
    name: "Bianca & Lucas",
    quote:
      "Transformou nossa rotina. Hoje temos momentos que realmente importam.",
    role: "Reacendendo o carinho"
  }
];

const faqs = [
  {
    question: "Como recebo o webook?",
    answer:
      "Assim que o pagamento é confirmado via Stripe, você recebe um e-mail automático com o link para criar sua conta na Dashboard e baixar o webook."
  },
  {
    question: "Posso usar sozinho(a)?",
    answer:
      "Sim! O conteúdo foi desenhado para estimular empatia, autoconhecimento e novas conversas mesmo se você estiver iniciando a jornada individualmente."
  },
  {
    question: "Preciso instalar algo?",
    answer:
      "Nada de downloads complicados. Todo o acesso é direto pelo navegador, no dispositivo que preferir."
  }
];

const adCopy = {
  headline:
    "Descubra o guia que salvou mais de 10 mil relacionamentos - e comece por R$ 40.",
  sub:
    "Rituais diários, conversas profundas e desafios que reacendem o amor - tudo em um único webook.",
  cta: "Quero fortalecer meu relacionamento agora.",
  triggers: [
    "Urgência: Promoção de lançamento - termina em 48 h.",
    "Autoridade: Conteúdo validado por profissionais e casais reais.",
    "Prova social: Mais de 95 % dos leitores relatam melhora na comunicação em 7 dias."
  ]
};

const CTA_PRIMARY = {
  label: "Quero meu webook por R$ 40",
  href: "#checkout"
};

const CTA_SECONDARY = {
  label: "Quero fortalecer meu relacionamento agora",
  href: "#checkout"
};

export default function LandingPage() {
  const repeatedTestimonials = useMemo(
    () => [...testimonials, ...testimonials],
    []
  );

  return (
    <main className="relative overflow-hidden pb-24">
      <Hero />

      <motion.section
        className="relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-0"
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center text-lg text-slate-200/90"
        >
          Você sente que o relacionamento esfriou, que as conversas ficaram
          curtas e o carinho se perdeu na rotina?
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((item) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              className="glass relative flex flex-col gap-4 rounded-2xl p-6 shadow-lg shadow-black/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          variants={fadeUp}
          className="mt-12 text-center text-base text-slate-200/90"
        >
          O "Webook +1.000 Receitas de Amor" foi criado para casais reais, com
          rotinas reais, que querem se reencontrar.
        </motion.p>
      </motion.section>

      <motion.section
        className="relative z-10 mx-auto max-w-5xl px-6 pb-20 lg:px-0"
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-primary" />
          <h2 className="font-display text-3xl font-semibold text-white">
            O que você vai receber
          </h2>
        </motion.div>
        <motion.ul
          variants={staggerChildren(0.3)}
          className="mt-8 space-y-4"
        >
          {deliverables.map((item, index) => (
            <motion.li
              key={item}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <motion.span
                className="mt-1 rounded-full bg-primary/15 p-2 text-primary"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.3,
                  ease: [0.24, 0.8, 0.25, 1]
                }}
              >
                <CheckCircle2 className="h-5 w-5" />
              </motion.span>
              <p className="text-base text-slate-100/90">{item}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <Testimonials repeatedTestimonials={repeatedTestimonials} />

      <OfferSection />

      <PostPurchaseFlow />

      <AdCopySection />

      <FAQSection />

      <Footer />
    </main>
  );
}

function Hero() {
  const particleOffsets = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, index) => ({
        delay: index * 0.6,
        left: `${10 + index * 10}%`
      })),
    []
  );

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.28),_transparent)] blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col-reverse gap-16 px-6 lg:flex-row lg:items-center lg:px-0">
        <motion.div
          className="flex-1 space-y-6"
          variants={staggerChildren(0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            Promoção de lançamento - termina em 48 h.
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl"
          >
            +1.000 receitas para reacender o amor - 10 minutos por dia.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg text-slate-200/90"
          >
            O guia definitivo de rituais, desafios e conversas profundas que
            transformam relações. Baseado em práticas usadas por terapeutas de
            casais.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-4 sm:flex-row"
          >
            <Link
              href={CTA_PRIMARY.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              🔥 {CTA_PRIMARY.label}
            </Link>
            <span className="text-sm text-slate-200/80">
              💬 Acesso imediato + garantia de 7 dias.
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200/80"
          >
            <ShieldCheck className="h-5 w-5 text-secondary" />
            Conteúdo validado por profissionais e casais reais.
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.24, 0.8, 0.25, 1] }}
        >
          <div className="relative h-[360px] w-[260px] sm:h-[420px] sm:w-[300px]">
            <motion.div
              className="glass absolute inset-0 rounded-[28px] border border-white/20 bg-gradient-to-br from-white/10 via-secondary/10 to-primary/20 p-8 shadow-[0_25px_60px_rgba(15,21,36,0.7)]"
              animate={{
                y: [0, -12, 0],
                rotate: [ -3, 3, -3 ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="text-sm uppercase tracking-widest text-slate-200/60">
                    Webook
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-semibold">
                    Receitas de Amor
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-slate-200/80">
                  <p>Rituais diários • Conversas profundas • Desafios semanais</p>
                  <p>Planos guiados para 7, 14 e 30 dias.</p>
                  <p>Mais de 95% dos leitores relatam melhora em 7 dias.</p>
                </div>
                <div className="mt-6 rounded-2xl bg-white/10 p-4 text-xs uppercase tracking-widest text-primary">
                  Dashboard com progresso + favoritos
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-r from-primary/60 via-secondary/50 to-primary/60 blur-[80px]"
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {particleOffsets.map(({ delay, left }, index) => (
            <motion.span
              key={index}
              className="absolute top-10 h-2 w-2 rounded-full bg-white/70"
              style={{ left }}
              animate={{
                y: [0, -80],
                opacity: [0, 1, 0]
              }}
              transition={{
                delay,
                repeat: Infinity,
                repeatType: "loop",
                duration: 6,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-4 px-6 text-center text-sm text-slate-200/80">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: [0.24, 0.8, 0.25, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          Urgência: Promoção de lançamento - termina em 48 h.
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Autoridade: Conteúdo validado por profissionais e casais reais.
          Prova social: Mais de 95% relatam melhora na comunicação em 7 dias.
        </motion.span>
      </div>
    </section>
  );
}

type TestimonialsProps = {
  repeatedTestimonials: typeof testimonials;
};

function Testimonials({ repeatedTestimonials }: TestimonialsProps) {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 lg:px-0">
      <motion.div
        className="glass overflow-hidden rounded-3xl p-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-semibold text-white">
              Casais reais, resultados reais
            </h2>
            <p className="max-w-xl text-sm text-slate-200/80">
              "Faz 10 anos que estamos juntos e nunca nos comunicamos tão bem."
              <br />
              "As tarefas diárias são simples, mas o impacto é gigante."
            </p>
          </div>
          <div className="hidden text-right text-xs uppercase tracking-[0.3em] text-slate-200/40 sm:block">
            Baseado em estudos de psicologia positiva e comunicação não-violenta.
          </div>
        </div>
        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-33.333%", "-66.666%", "0%"]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {repeatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-full min-w-[280px] max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/60 to-secondary/60 text-sm font-semibold text-white">
                    {testimonial.name
                      .split("&")[0]
                      .trim()
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <span className="text-xs uppercase tracking-wide text-slate-200/60">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-200/90">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-slate-200/40 sm:hidden">
          Baseado em estudos de psicologia positiva e comunicação não-violenta.
        </div>
      </motion.div>
    </section>
  );
}

function OfferSection() {
  return (
    <section
      id="checkout"
      className="relative z-10 mx-auto max-w-4xl px-6 pb-20 lg:px-0"
    >
      <motion.div
        className="glass relative overflow-hidden rounded-3xl p-10 shadow-[0_25px_60px_rgba(15,21,36,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.24, 0.8, 0.25, 1] }}
      >
        <motion.div
          className="absolute right-8 top-6 rounded-full border border-primary/50 bg-primary/15 px-4 py-1 text-xs uppercase tracking-wide text-primary"
          animate={{ scale: [1, 1.05, 1], y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          lançamento promocional - termina em 48 h
        </motion.div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-200/60">
              Oferta exclusiva
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white">
              R$ 40 à vista
              <span className="ml-2 text-lg text-slate-200/70">
                ou 12× no cartão
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-sm text-slate-200/80">
              Pagamento 100% seguro via Stripe. Garantia total: se não sentir
              mudança em 7 dias, devolvemos seu dinheiro.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link
              href={CTA_SECONDARY.href}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              Garantir meu acesso agora
            </Link>
            <div className="flex items-center gap-2 text-xs text-slate-200/60">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              Pagamento 100% seguro via Stripe.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PostPurchaseFlow() {
  const flowItems = [
    {
      title: "Stripe Checkout",
      description:
        "Coletamos nome e e-mail com pagamento 100% seguro. Assim que o pagamento confirma, nosso webhook dispara a próxima etapa.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    },
    {
      title: "E-mail automático",
      description:
        "Assunto: \"Seu acesso ao Webook +1.000 Receitas de Amor 💖\". Enviamos o link para criar a senha e acessar a Dashboard com o mesmo e-mail usado na compra.",
      icon: <Sparkles className="h-6 w-6 text-secondary" />
    },
    {
      title: "Dashboard exclusiva",
      description:
        "Filtros de 7/14/30 dias, categorias (Confiança, Diálogo, Carinho…), busca por palavra-chave, favoritos e acompanhamento do progresso.",
      icon: <HeartHandshake className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 lg:px-0">
      <motion.div
        className="glass rounded-3xl p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.24, 0.8, 0.25, 1] }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-semibold text-white">
            Fluxo pós-compra em 3 passos
          </h2>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-200/40">
            Stripe → E-mail → Dashboard
          </span>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {flowItems.map((item) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.24, 0.8, 0.25, 1] }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-200/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-secondary/30 bg-secondary/10 px-6 py-5 text-sm text-secondary">
          Após o login, o casal visualiza categorias, filtros por tempo, campo
          de busca, botão "Favoritos" e acompanhamento de progresso - tudo para
          manter o vínculo aquecido no dia a dia.
        </div>
      </motion.div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 lg:px-0">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren(0.1)}
      >
        <motion.div variants={fadeUp} className="space-y-2 text-center">
          <h2 className="font-display text-3xl font-semibold text-white">
            Perguntas frequentes
          </h2>
          <p className="text-sm text-slate-200/70">
            Cada etapa do fluxo foi desenhada para ser simples: Stripe →
            e-mail → Dashboard exclusiva.
          </p>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`item-${index}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}

function AdCopySection() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 lg:px-0">
      <motion.div
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.24, 0.8, 0.25, 1] }}
      >
        <h2 className="font-display text-2xl font-semibold text-white">
          Copywriting pronto para anúncios
        </h2>
        <div className="mt-6 space-y-4 text-sm text-slate-200/85">
          <div>
            <p className="font-semibold text-white">Headline</p>
            <p>{adCopy.headline}</p>
          </div>
          <div>
            <p className="font-semibold text-white">Subheadline</p>
            <p>{adCopy.sub}</p>
          </div>
          <div>
            <p className="font-semibold text-white">CTA sugerida</p>
            <p>{adCopy.cta}</p>
          </div>
          <div>
            <p className="font-semibold text-white">Gatilhos</p>
            <ul className="mt-2 space-y-1">
              {adCopy.triggers.map((trigger) => (
                <li key={trigger} className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{trigger}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-5xl flex-col gap-4 px-6 text-sm text-slate-200/60 sm:flex-row sm:items-center sm:justify-between lg:px-0">
      <div className="flex items-center gap-6">
        <Link href="#termos" className="hover:text-white">
          Termos
        </Link>
        <Link href="#privacidade" className="hover:text-white">
          Privacidade
        </Link>
        <Link href="#contato" className="hover:text-white">
          Contato
        </Link>
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-secondary" />
          Selo SSL
        </span>
      </div>
      <p className="text-xs text-slate-200/50">
        Material educativo. Resultados variam conforme o comprometimento do casal.
      </p>
    </footer>
  );
}
