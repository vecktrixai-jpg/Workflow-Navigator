import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown, Plus, Minus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { CALENDLY, Eyebrow, SectionTitle } from "@/components/site/shared";
import {
  architectureLayers,
  capabilityNodes,
  crossIndustryPatterns,
  heroDocumentTypes,
  heroTargets,
  heroWorkflow,
  industryUseCases,
  useCaseOutcomes,
  type IndustryUseCases,
} from "@/components/site/use-cases-data";

const reveal = (reduced: boolean | null, delay = 0) => ({
  initial: reduced ? false : { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, delay },
});

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 130;
  window.scrollTo({ top, behavior: "smooth" });
}

function UseCaseHero() {
  const reduced = useReducedMotion();
  return (
    <section className="uc-hero section-shell">
      <div className="uc-hero-copy">
        <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>Document workflow automation</Eyebrow>
          <h1 className="uc-hero-title">Automate the work that happens <em>around</em> your documents.</h1>
          <p className="uc-hero-lead">
            From onboarding and compliance to claims, verification, approvals and final delivery — VECKTRIX AI transforms
            document-heavy business processes into intelligent, end-to-end workflows.
          </p>
          <div className="uc-hero-actions">
            <Button onClick={() => scrollToId("industry-navigation")}>Explore workflows <ArrowRight /></Button>
            <Button asChild variant="outline"><a href={CALENDLY} target="_blank" rel="noreferrer">Talk to an expert</a></Button>
          </div>
        </motion.div>
      </div>

      <div className="uc-hero-visual" aria-label="Documents flowing through an automated workflow into enterprise systems">
        <div className="uc-hero-docs">
          {heroDocumentTypes.map((doc, i) => (
            <motion.span
              key={doc}
              initial={reduced ? false : { opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
            >
              {doc}
            </motion.span>
          ))}
        </div>
        <div className="uc-hero-chain">
          {heroWorkflow.map((step, i) => (
            <motion.span
              key={step}
              className={i === 0 ? "is-input" : i === heroWorkflow.length - 1 ? "is-act" : undefined}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
            >
              <b>{String(i + 1).padStart(2, "0")}</b>
              {step}
            </motion.span>
          ))}
        </div>
        <p className="uc-hero-target-label">Connected output</p>
        <div className="uc-hero-targets">
          {heroTargets.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}

function IndustryNav({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <nav className="uc-industry-nav" id="industry-navigation" aria-label="Industry workflows">
      <div className="section-shell uc-industry-nav-inner">
        <span className="uc-industry-nav-label">Industries</span>
        <div className="uc-industry-rail">
          {industryUseCases.map((industry, i) => (
            <button
              key={industry.id}
              type="button"
              aria-current={active === industry.id}
              onClick={() => { onSelect(industry.id); scrollToId(industry.id); }}
            >
              <b>{String(i + 1).padStart(2, "0")}</b>{industry.short}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function WorkflowCard({ item, index }: { item: IndustryUseCases["cases"][number]; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article className="uc-card" {...reveal(reduced, Math.min(index, 3) * 0.06)}>
      <header>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </header>

      <div className="uc-card-docs">
        <span className="uc-card-label">Documents</span>
        <div>{item.documents.map((d) => <em key={d}>{d}</em>)}</div>
      </div>

      <div className="uc-card-flow">
        <span className="uc-card-label">Workflow</span>
        <ol>
          {item.flow.map((step, i) => (
            <li key={step + i}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <footer>
        <span className="uc-card-label">Business action</span>
        <p>{item.outcome}</p>
      </footer>
    </motion.article>
  );
}

function IndustrySection({ industry, index }: { industry: IndustryUseCases; index: number }) {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const initialCount = 3;
  const visible = expanded ? industry.cases : industry.cases.slice(0, initialCount);
  const hidden = industry.cases.length - initialCount;

  return (
    <section className="uc-industry section-shell" id={industry.id}>
      <motion.header className="uc-industry-head" {...reveal(reduced)}>
        <span className="uc-industry-number">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>{industry.name}</h3>
          <p>{industry.description}</p>
        </div>
        <span className="uc-industry-count">{industry.cases.length} workflows</span>
      </motion.header>

      <div className="uc-card-grid">
        {visible.map((item, i) => <WorkflowCard key={item.name} item={item} index={i} />)}
      </div>

      {hidden > 0 && (
        <button type="button" className="uc-expand" onClick={() => setExpanded(!expanded)}>
          {expanded ? <Minus /> : <Plus />}
          {expanded ? "Show fewer workflows" : `Explore all workflows (+${hidden})`}
        </button>
      )}
    </section>
  );
}

function PatternsSection() {
  const reduced = useReducedMotion();
  return (
    <section className="uc-patterns">
      <div className="section-shell">
        <motion.div {...reveal(reduced)}>
          <Eyebrow>Cross-industry capabilities</Eyebrow>
          <SectionTitle>The workflow patterns <em>behind</em> the use cases.</SectionTitle>
        </motion.div>
        <div className="uc-pattern-grid">
          {crossIndustryPatterns.map((pattern, i) => (
            <motion.article key={pattern.name} className="uc-pattern" {...reveal(reduced, i * 0.05)}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{pattern.name}</h3>
              <div className="uc-pattern-flow">
                {pattern.flow.map((step) => <em key={step}>{step}</em>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  const reduced = useReducedMotion();
  return (
    <section className="uc-capability">
      <div className="section-shell">
        <motion.div {...reveal(reduced)}>
          <Eyebrow invert>What we automate</Eyebrow>
          <SectionTitle>More than extraction. <em>We automate the workflow.</em></SectionTitle>
        </motion.div>

        <div className="uc-capability-grid">
          {capabilityNodes.map((node, i) => (
            <motion.span
              key={node}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 8) * 0.05 }}
            >
              <b>{String(i + 1).padStart(2, "0")}</b>{node}
            </motion.span>
          ))}
        </div>

        <motion.div className="uc-stack" {...reveal(reduced)}>
          {architectureLayers.map((layer, i) => (
            <div key={layer.label} className={`uc-stack-layer uc-stack-${layer.tone}`}>
              <span>{layer.label}</span>
              <div>{layer.items.map((item) => <em key={item}>{item}</em>)}</div>
              {i < architectureLayers.length - 1 && <ArrowDown aria-hidden="true" />}
            </div>
          ))}
        </motion.div>
        <p className="uc-stack-note">
          VECKTRIX AI can leverage existing document-intelligence infrastructure and implement the customer-specific
          workflow layer around it.
        </p>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const reduced = useReducedMotion();
  return (
    <section className="uc-outcomes section-shell">
      <motion.div {...reveal(reduced)}>
        <Eyebrow>Business outcomes</Eyebrow>
        <SectionTitle>Turn document operations into <em>business capacity.</em></SectionTitle>
      </motion.div>
      <div className="uc-outcome-grid">
        {useCaseOutcomes.map((outcome, i) => (
          <motion.article key={outcome.title} className="uc-outcome" {...reveal(reduced, i * 0.05)}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <h3>{outcome.title}</h3>
            <p>{outcome.copy}</p>
          </motion.article>
        ))}
      </div>
      <p className="uc-outcome-note">
        Automate repetitive document-driven work while keeping people involved where judgment, approval or exception
        handling is required.
      </p>
    </section>
  );
}

function UseCaseCta() {
  const reduced = useReducedMotion();
  return (
    <section className="uc-cta">
      <motion.div className="section-shell" {...reveal(reduced)}>
        <SectionTitle>Have a document-driven process that&apos;s slow, manual or <em>hard to scale?</em></SectionTitle>
        <p>
          Show us your workflow. We&apos;ll identify where AI, automation and intelligent document processing can reduce
          manual work and accelerate operations.
        </p>
        <div className="uc-cta-actions">
          <Button asChild><a href={CALENDLY} target="_blank" rel="noreferrer">Automate your workflow <ArrowRight /></a></Button>
          <Button asChild variant="outline"><a href={CALENDLY} target="_blank" rel="noreferrer">Talk to an expert</a></Button>
        </div>
      </motion.div>
    </section>
  );
}

export function UseCasesPage() {
  const first = industryUseCases[0];
  const [active, setActive] = useState(first ? first.id : "");
  const manual = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - manual.current < 900) return;
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const top = visible[0];
        if (top?.target.id) setActive(top.target.id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 },
    );
    for (const industry of industryUseCases) {
      const el = document.getElementById(industry.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <main className="use-cases-page">
      <UseCaseHero />
      <IndustryNav active={active} onSelect={(id) => { manual.current = Date.now(); setActive(id); }} />
      <div className="uc-industries">
        {industryUseCases.map((industry, i) => <IndustrySection key={industry.id} industry={industry} index={i} />)}
      </div>
      <PatternsSection />
      <CapabilitySection />
      <OutcomesSection />
      <UseCaseCta />
    </main>
  );
}
