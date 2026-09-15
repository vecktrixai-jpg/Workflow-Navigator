import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CALENDLY, Eyebrow, SectionTitle } from "@/components/site/shared";
import {
  architectureStack,
  businessValueCards,
  caseStudies,
  crossCaseCapabilities,
  heroChain,
  industryFilters,
  traditionalFlow,
  vecktrixFlow,
  type CaseStudy,
} from "@/components/site/case-studies-data";

const reveal = (reduced: boolean | null, delay = 0) => ({
  initial: reduced ? false : { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, delay },
});

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 130, behavior: "smooth" });
}

function CaseHero() {
  const reduced = useReducedMotion();
  return (
    <section className="cs-hero section-shell">
      <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Eyebrow>Representative workflow scenarios</Eyebrow>
        <h1 className="cs-hero-title">From document processing <em>to business automation.</em></h1>
        <p className="cs-hero-lead">
          Explore how VECKTRIX AI can transform document-heavy business processes into intelligent workflows that connect
          document understanding, validation, business rules, approvals and enterprise systems.
        </p>
        <div className="cs-hero-actions">
          <Button asChild><a href={CALENDLY} target="_blank" rel="noreferrer">Automate your workflow <ArrowRight /></a></Button>
          <Button asChild variant="outline"><a href={CALENDLY} target="_blank" rel="noreferrer">Talk to an expert</a></Button>
        </div>
      </motion.div>

      <div className="cs-hero-chain" aria-label="Documents move through understand, validate, reason, decide and act">
        {heroChain.map((step, i) => (
          <motion.span
            key={step}
            className={i === heroChain.length - 1 ? "is-act" : undefined}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.09, duration: 0.5 }}
          >
            <b>{String(i + 1).padStart(2, "0")}</b>{step}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function IntroSection() {
  const reduced = useReducedMotion();
  return (
    <section className="cs-intro">
      <div className="section-shell">
        <motion.div {...reveal(reduced)}>
          <Eyebrow>The workflow gap</Eyebrow>
          <SectionTitle>The document is <em>only the start.</em></SectionTitle>
          <div className="cs-intro-copy">
            <p>
              Modern document intelligence can identify, classify and extract information from business documents. The
              larger operational challenge is what happens after that information is extracted.
            </p>
            <p>
              VECKTRIX AI connects document intelligence with business rules, validation, decision-making, approvals and
              enterprise systems — turning document information into business action.
            </p>
          </div>
        </motion.div>

        <div className="cs-compare">
          <motion.div className="cs-compare-panel" {...reveal(reduced)}>
            <span className="cs-panel-label">Traditional document processing</span>
            <ol>{traditionalFlow.map((s) => <li key={s}>{s}</li>)}</ol>
          </motion.div>
          <motion.div className="cs-compare-panel is-strong" {...reveal(reduced, 0.1)}>
            <span className="cs-panel-label">VECKTRIX AI</span>
            <ol>{vecktrixFlow.map((s, i) => <li key={s}><i>{String(i + 1).padStart(2, "0")}</i>{s}</li>)}</ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="cs-flow">
      {steps.map((step, i) => (
        <li key={step + i} className={i === steps.length - 1 ? "is-final" : undefined}>
          <i>{String(i + 1).padStart(2, "0")}</i>{step}
        </li>
      ))}
    </ol>
  );
}

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      className="cs-card"
      id={study.id}
      layout
      initial={reduced ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
    >
      <header className="cs-card-head">
        <span className="cs-card-number">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <p className="cs-card-meta"><em>{study.industry}</em><span>{study.category}</span></p>
          <h3>{study.title}</h3>
        </div>
      </header>

      <div className="cs-card-body">
        <div className="cs-card-col">
          <span className="cs-panel-label">The challenge</span>
          {study.challenge.map((p) => <p key={p.slice(0, 28)}>{p}</p>)}
          <span className="cs-panel-label cs-spaced">The VECKTRIX AI approach</span>
          <p>{study.approach}</p>
        </div>
        <div className="cs-card-col">
          <span className="cs-panel-label">Automated workflow</span>
          <WorkflowDiagram steps={study.workflow} />
        </div>
      </div>

      <div className="cs-impact">
        <span className="cs-panel-label">Potential business impact</span>
        <div>{study.impact.map((item, i) => <em key={item}><b>{String(i + 1).padStart(2, "0")}</b>{item}</em>)}</div>
      </div>

      <button type="button" className="cs-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? <Minus /> : <Plus />}{open ? "Hide workflow details" : "View workflow details"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="cs-details"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="cs-panel-label">What the workflow can do</span>
            <ul>{study.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="cs-card-foot">
        <a href={CALENDLY} target="_blank" rel="noreferrer">Discuss this workflow <ArrowRight /></a>
      </footer>
    </motion.article>
  );
}

function CaseStudiesSection() {
  const [filter, setFilter] = useState<string>("all");
  const visible = filter === "all" ? caseStudies : caseStudies.filter((c) => c.industryId === filter);

  return (
    <>
      <nav className="cs-filter" id="case-studies" aria-label="Filter case studies by industry">
        <div className="section-shell cs-filter-inner">
          <span className="cs-filter-label">Industries</span>
          <div className="cs-filter-rail">
            {industryFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => { setFilter(item.id); scrollToId("case-studies"); }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="cs-list section-shell">
        <AnimatePresence mode="popLayout">
          {visible.map((study, i) => <CaseCard key={study.id} study={study} index={i} />)}
        </AnimatePresence>
        {visible.length === 0 && <p className="cs-empty">No representative workflow listed for this industry yet.</p>}
      </section>
    </>
  );
}

function CrossCaseSection() {
  const reduced = useReducedMotion();
  return (
    <section className="cs-cross">
      <div className="section-shell">
        <motion.div {...reveal(reduced)}>
          <Eyebrow>Shared approach</Eyebrow>
          <SectionTitle>One automation approach. <em>Multiple business processes.</em></SectionTitle>
          <p className="cs-cross-copy">
            Whether the workflow involves compliance, onboarding, claims, certification, reconciliation or approvals, the
            underlying approach remains the same: understand the documents, validate the information, apply business logic
            and execute the required business action.
          </p>
        </motion.div>
        <div className="cs-cross-grid">
          {crossCaseCapabilities.map((item, i) => (
            <motion.article key={item.name} className="cs-cross-card" {...reveal(reduced, i * 0.05)}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const reduced = useReducedMotion();
  return (
    <section className="cs-architecture">
      <div className="section-shell">
        <motion.div {...reveal(reduced)}>
          <Eyebrow invert>Architecture</Eyebrow>
          <SectionTitle>From document intelligence <em>to business action.</em></SectionTitle>
          <p className="cs-arch-copy">
            VECKTRIX AI works as the workflow and orchestration layer between document intelligence and the systems that
            run the business.
          </p>
        </motion.div>

        <motion.div className="cs-stack" {...reveal(reduced)}>
          {architectureStack.map((layer, i) => (
            <div key={layer.label} className={`cs-stack-layer cs-stack-${layer.tone}`}>
              <span>{layer.label}</span>
              <div>{layer.items.map((item) => <em key={item}>{item}</em>)}</div>
              {i < architectureStack.length - 1 && <ArrowDown aria-hidden="true" />}
            </div>
          ))}
        </motion.div>
        <p className="cs-arch-note">
          VECKTRIX AI can work with existing enterprise infrastructure and document-intelligence platforms rather than
          requiring organizations to replace the systems they already run.
        </p>
      </div>
    </section>
  );
}

function BusinessValueSection() {
  const reduced = useReducedMotion();
  return (
    <section className="cs-value section-shell">
      <motion.div {...reveal(reduced)}>
        <Eyebrow>Business value</Eyebrow>
        <SectionTitle>Automate the work that happens <em>around your documents.</em></SectionTitle>
        <p className="cs-value-copy">
          The greatest operational opportunity is often not the document itself, but the repetitive work surrounding it.
        </p>
      </motion.div>
      <div className="cs-value-grid">
        {businessValueCards.map((card, i) => (
          <motion.article key={card.name} className="cs-value-card" {...reveal(reduced, i * 0.05)}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{card.name}</h3>
            <p>{card.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  const reduced = useReducedMotion();
  return (
    <section className="cs-cta">
      <motion.div className="section-shell" {...reveal(reduced)}>
        <Eyebrow invert>Have a document-driven process?</Eyebrow>
        <SectionTitle>Show us the workflow. <em>We&apos;ll find the automation opportunity.</em></SectionTitle>
        <p>
          Whether your process involves verification, compliance, onboarding, claims, approvals, reconciliation or
          documentation, VECKTRIX AI can evaluate the workflow and identify where AI, intelligent document processing and
          automation can reduce manual effort and accelerate operations.
        </p>
        <div className="cs-cta-actions">
          <Button asChild><a href={CALENDLY} target="_blank" rel="noreferrer">Automate your workflow <ArrowRight /></a></Button>
          <Button asChild variant="outline"><a href={CALENDLY} target="_blank" rel="noreferrer">Talk to an expert</a></Button>
        </div>
        <p className="cs-brand-statement">
          VECKTRIX AI — from documents to intelligence. From intelligence to business action.
        </p>
      </motion.div>
    </section>
  );
}

export function CaseStudiesPage() {
  return (
    <main className="case-studies-page">
      <CaseHero />
      <IntroSection />
      <CaseStudiesSection />
      <CrossCaseSection />
      <ArchitectureSection />
      <BusinessValueSection />
      <FinalCta />
    </main>
  );
}
