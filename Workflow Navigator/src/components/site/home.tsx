import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CALENDLY, Eyebrow, SectionTitle } from "@/components/site/shared";

const idpPlatforms = [
  { name: "AWS Textract", brand: "aws" },
  { name: "Microsoft Azure AI Document Intelligence", brand: "azure" },
  { name: "Google Document AI", brand: "google" },
  { name: "UiPath Document Understanding", brand: "uipath" },
  { name: "ABBYY Vantage", brand: "abbyy" },
  { name: "OCR / Document APIs", brand: "api" },
  { name: "LLMs", brand: "llm" },
] as const;

const intelligenceSteps = ["Document", "OCR", "Classification", "Data extraction", "Structured data"];
const workflowCapabilities = ["Business logic", "Cross-document validation", "Rules & policies", "Decisioning", "Exception handling", "Human-in-the-loop", "Approvals", "System integration", "Audit trail"];
const vecktrixSteps = ["Understand", "Validate", "Reason", "Decide", "Act"];
const enterpriseSystems = ["CRM", "ERP", "DMS", "Databases", "APIs", "Custom portals", "Email / notifications"];

const automationResearch = [
  {
    organization: "McKinsey Global Institute",
    mark: "MGI",
    statistic: "60–70%",
    description: "Current generative AI and related technologies have the technical potential to automate activities that currently consume 60–70% of employees' time.",
    report: "The Economic Potential of Generative AI: The Next Productivity Frontier",
    year: "2023",
    href: "https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
  },
  {
    organization: "Microsoft + LinkedIn",
    mark: "MS + IN",
    statistic: "30+ MIN/DAY",
    description: "AI power users reported saving more than 30 minutes per day through AI-enabled work.",
    report: "2024 Work Trend Index",
    year: "2024",
    href: "https://news.microsoft.com/source/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work/",
  },
  {
    organization: "UiPath",
    mark: "UIPATH",
    statistic: "10+ HOURS/WEEK",
    description: "42% of respondents who had implemented GenAI reported saving 10 or more hours per week.",
    report: "2024 Global Knowledge Worker Survey",
    year: "2024",
    href: "https://www.uipath.com/resources/automation-analyst-reports/global-knowledge-worker-survey",
  },
] as const;

const businessCaseFlow = ["Documents", "AI / IDP", "Business logic", "Applications", "AI-assisted approval", "Business action"];
const businessOutcomes = ["Reduce manual effort", "Lower operational overhead", "Accelerate turnaround time", "Scale operations"];

function ResearchLogo({ organization }: { organization: (typeof automationResearch)[number]["organization"] }) {
  if (organization === "McKinsey Global Institute") {
    return <span className="research-logo research-logo-mckinsey" aria-hidden="true"><i>M</i><b>McKinsey<br />&amp; Company</b></span>;
  }

  if (organization === "Microsoft + LinkedIn") {
    return <span className="research-logo research-logo-partners" aria-hidden="true"><span className="microsoft-symbol"><i /><i /><i /><i /></span><b>Microsoft</b><em>+</em><span className="linkedin-symbol">in</span><b>LinkedIn</b></span>;
  }

  return <span className="research-logo research-logo-uipath" aria-hidden="true"><i><span /></i><b>UiPath</b></span>;
}

function PlatformMark({ brand }: { brand: (typeof idpPlatforms)[number]["brand"] }) {
  if (brand === "aws") return <span className="platform-mark platform-mark-aws" aria-hidden="true"><b>AWS</b><i /></span>;
  if (brand === "azure") return <span className="platform-mark platform-mark-azure" aria-hidden="true"><i /><i /></span>;
  if (brand === "google") return <span className="platform-mark platform-mark-google" aria-hidden="true">G</span>;
  if (brand === "uipath") return <span className="platform-mark platform-mark-uipath" aria-hidden="true"><i /></span>;
  if (brand === "abbyy") return <span className="platform-mark platform-mark-abbyy" aria-hidden="true">ABBYY</span>;
  if (brand === "api") return <span className="platform-mark platform-mark-neutral" aria-hidden="true">{`{ }`}</span>;
  return <span className="platform-mark platform-mark-neutral" aria-hidden="true">AI</span>;
}

function HeroGraphic() {
  const reduced = useReducedMotion();
  return (
    <div className="hero-graphic" aria-label="Abstract workflow from document inputs to business action">
      <svg viewBox="0 0 820 510" role="img">
        <defs><filter id="orangeGlow"><feGaussianBlur stdDeviation="10" /></filter></defs>
        <g className="input-shapes">
          {[90, 170, 250, 330].map((y, i) => <motion.rect key={y} x={20 + (i % 2) * 35} y={y} width={90 + i * 8} height="36" rx="2" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * .12, duration: .8 }} />)}
        </g>
        <path className="flow-line" d="M170 108 C260 108 240 250 320 250 S400 105 465 105 S520 250 590 250 S650 400 730 400" />
        <motion.path className="flow-pulse" d="M170 108 C260 108 240 250 320 250 S400 105 465 105 S520 250 590 250 S650 400 730 400" strokeDasharray="18 150" animate={reduced ? false : { strokeDashoffset: [0, -336] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />
        {[{ x: 320, y: 250 }, { x: 465, y: 105 }, { x: 590, y: 250 }].map((p, i) => <motion.g key={p.x} animate={reduced ? false : { scale: [1, 1.06, 1] }} transition={{ duration: 3.8, delay: i * .55, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: `${p.x}px ${p.y}px` }}><circle className="node-ring" cx={p.x} cy={p.y} r={38 + i * 5} /><circle className="node-dot" cx={p.x} cy={p.y} r="5" /></motion.g>)}
        <motion.circle cx="730" cy="400" r="66" className="action-glow" animate={reduced ? false : { r: [58, 68, 58], opacity: [.35, .65, .35] }} transition={{ duration: 4, repeat: Infinity }} />
        <circle cx="730" cy="400" r="42" className="action-core" />
        <g className="dot-field">{Array.from({ length: 36 }).map((_, i) => <circle key={i} cx={230 + (i % 6) * 18} cy={350 + Math.floor(i / 6) * 18} r="2" />)}</g>
      </svg>
      <div className="hero-stages">{["Understand", "Validate", "Reason", "Decide", "Act"].map((s, i) => <span key={s}><b>0{i + 1}</b>{s}</span>)}</div>
      <div className="hero-process" aria-label="Documents become business action through AI processing and an automated workflow">
        {["Documents", "AI processing", "Automated workflow", "Decision", "Business action"].map((item, i) => (
          <motion.span key={item} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 + i * .16, duration: .5 }}>
            <b>{String(i + 1).padStart(2, "0")}</b>{item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <motion.div initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <Eyebrow>AI-powered document workflow automation</Eyebrow>
        </motion.div>
        <motion.h1 initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>Automate<br />document-driven<br />business <em>workflows.</em></motion.h1>
        <motion.p className="hero-lead" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .22 }}>VECKTRIX AI implements intelligent document processing workflows that automate verification, validation, decision making and business actions reducing manual effort, operational overhead and turnaround time.</motion.p>
        <motion.p className="hero-tagline" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .42 }}><span>Brand principle</span>From documents to business action.</motion.p>
        <div className="hero-actions">
          <Button asChild variant="outline" size="lg"><a href={CALENDLY} target="_blank" rel="noreferrer">Talk to us <ArrowRight /></a></Button>
        </div>
      </div>
      <HeroGraphic />
      <motion.div className="hero-outcomes" initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .65 }} aria-label="Business outcomes">
        <span><b>01</b>Lower cost</span>
        <span><b>02</b>Less manual effort</span>
        <span><b>03</b>Faster turnaround</span>
      </motion.div>
    </section>
  );
}

function FlowArrow({ active = false }: { active?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <div className={active ? "idp-flow-arrow is-active" : "idp-flow-arrow"} aria-hidden="true">
      <span />
      <motion.i animate={reduced ? false : { left: ["8%", "82%"], opacity: [.3, 1, .3] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
      <ArrowRight />
    </div>
  );
}

function IdpGapSection() {
  const reduced = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.65, delay },
  });

  return (
    <section className="idp-gap-section" aria-labelledby="idp-gap-title">
      <div className="section-shell">
        <div className="idp-gap-intro">
          <motion.div {...reveal()}><Eyebrow>The IDP gap</Eyebrow></motion.div>
          <motion.div {...reveal(.08)}>
            <SectionTitle className="idp-gap-title"><span id="idp-gap-title">Document intelligence is not <em>business automation.</em></span></SectionTitle>
          </motion.div>
          <div className="idp-gap-copy">
            <motion.p {...reveal(.14)}>Organizations already use powerful OCR and IDP platforms to digitize documents and extract information. But complex document-driven processes rarely end with extraction.</motion.p>
            <motion.p {...reveal(.2)}>They require customer-specific business rules, cross-document validation, decisioning, approvals, exception handling and integration with existing enterprise systems.</motion.p>
          </div>
          <motion.p className="idp-core-message" {...reveal(.25)}><strong>VECKTRIX AI</strong> connects existing document intelligence to the customer&apos;s actual business workflow.</motion.p>
        </div>

        <div className="idp-architecture" aria-label="Existing document intelligence connected through VECKTRIX AI to enterprise systems and business action">
          <motion.article className="idp-source-panel" {...reveal()}>
            <header><span>01 / Existing infrastructure</span><h3>Existing document intelligence</h3></header>
            <div className="idp-platforms">
              {idpPlatforms.map((platform, index) => <motion.span key={platform.name} initial={reduced ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><PlatformMark brand={platform.brand} /><span>{platform.name}</span></motion.span>)}
            </div>
            <div className="idp-intelligence-pipeline">
              {intelligenceSteps.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}{index < intelligenceSteps.length - 1 && <ArrowRight aria-hidden="true" />}</span>)}
            </div>
            <p className="idp-strength-label">Powerful document intelligence</p>
          </motion.article>

          <FlowArrow />

          <motion.article className="idp-bridge-panel" {...reveal(.14)}>
            <header><span>02 / The bridge</span><h3>The business workflow layer</h3></header>
            <div className="idp-bridge-statement"><strong>Extraction is only the beginning.</strong><p>Every organization has its own rules, systems, processes and exceptions.</p></div>
            <div className="idp-capabilities">{workflowCapabilities.map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}</div>
            <div className="idp-bridge-brand"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><strong>VECKTRIX AI</strong><span>Implementation layer</span></div>
          </motion.article>

          <FlowArrow active />

          <motion.article className="idp-automation-panel" {...reveal(.28)}>
            <header><span>03 / Business automation</span><h3>VECKTRIX AI</h3><p>Custom business workflow</p></header>
            <div className="idp-vecktrix-flow">
              {vecktrixSteps.map((step, index) => <motion.span key={step} initial={reduced ? false : { borderColor: "var(--border)" }} whileInView={{ borderColor: "var(--primary)" }} viewport={{ once: true }} transition={{ delay: .3 + index * .12 }}><b>{String(index + 1).padStart(2, "0")}</b>{step}{index < vecktrixSteps.length - 1 && <ArrowRight aria-hidden="true" />}</motion.span>)}
            </div>
            <p className="idp-system-label">Connected enterprise systems</p>
            <div className="idp-systems">{enterpriseSystems.map((system, index) => <motion.span key={system} initial={reduced ? false : { opacity: .28 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .6 + index * .07 }}>{system}</motion.span>)}</div>
            <div className="idp-business-action"><span>Output</span><strong>Business action</strong></div>
          </motion.article>
        </div>

        <motion.div className="idp-gap-close" {...reveal()}>
          <h3>VECKTRIX AI connects document intelligence to <em>business operations.</em></h3>
          <p>We leverage existing AI and IDP infrastructure and implement the business logic, workflow orchestration, integrations and decisioning required to automate complex document-driven processes.</p>
        </motion.div>
      </div>
    </section>
  );
}

function BusinessCaseSection() {
  const reduced = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay },
  });

  return (
    <section className="business-case-section" aria-labelledby="business-case-title">
      <div className="section-shell">
        <div className="business-case-intro">
          <motion.div {...reveal()}><Eyebrow>Industry evidence</Eyebrow></motion.div>
          <motion.div {...reveal(.08)}>
            <SectionTitle className="business-case-title"><span id="business-case-title">Automation is creating measurable <em>business value.</em></span></SectionTitle>
          </motion.div>
          <motion.div className="business-case-copy" {...reveal(.16)}>
            <p>AI and automation are moving beyond experimentation. Organizations are using them to reduce repetitive work, increase employee capacity and accelerate operational processes.</p>
            <p>The opportunity is not simply using AI — it is connecting AI and automation to the workflows that run the business.</p>
          </motion.div>
        </div>

        <div className="research-grid" aria-label="Industry research on AI and automation">
          {automationResearch.map((item, index) => (
            <motion.article className="research-card" key={item.organization} {...reveal(index * .1)}>
              <header>
                <ResearchLogo organization={item.organization} />
                <span className="sr-only">{item.organization}</span>
              </header>
              <motion.p className={`research-stat research-stat-${index + 1}`} initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, delay: .15 + index * .12 }}>{item.statistic}</motion.p>
              <p className="research-description">“{item.description}”</p>
              <div className="research-source"><span>{item.report}</span><b>{item.organization} / {item.year}</b></div>
              <a href={item.href} target="_blank" rel="noreferrer" aria-label={`Read ${item.report} from ${item.organization}`}>Read the report <ArrowRight /></a>
            </motion.article>
          ))}
        </div>

        <motion.div className="business-case-statement" {...reveal()}>
          <p>The value is not just in automating a task.</p>
          <h3>It&apos;s in automating <em>the workflow.</em></h3>
          <span>Connect documents, AI, business rules, applications and approvals — and turn fragmented manual processes into intelligent, end-to-end workflows.</span>
        </motion.div>

        <div className="business-case-flow" aria-label="Documents flow through AI, business logic, applications and approval to business action">
          {businessCaseFlow.map((step, index) => (
            <motion.div key={step} className={index === businessCaseFlow.length - 1 ? "is-output" : ""} initial={reduced ? false : { opacity: .3, borderColor: "var(--border)" }} whileInView={{ opacity: 1, borderColor: index === businessCaseFlow.length - 1 ? "var(--primary)" : "var(--foreground)" }} viewport={{ once: true, amount: .4 }} transition={{ duration: .45, delay: index * .12 }}>
              <b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span>
              {index < businessCaseFlow.length - 1 && <ArrowRight aria-hidden="true" />}
            </motion.div>
          ))}
        </div>

        <div className="business-outcomes" aria-label="Key business outcomes">
          {businessOutcomes.map((outcome, index) => <motion.span key={outcome} {...reveal(index * .06)}><b>{String(index + 1).padStart(2, "0")}</b>{outcome}</motion.span>)}
        </div>

        <motion.div className="business-case-close" {...reveal()}>
          <h3>From manual work<br />to <em>intelligent operations.</em></h3>
          <p>VECKTRIX AI connects document intelligence, business logic and enterprise applications to automate the work that happens around your documents.</p>
        </motion.div>
      </div>
    </section>
  );
}


export function HomePage() {
  return (
    <main>
      <Hero />
      <IdpGapSection />
      <BusinessCaseSection />
    </main>
  );
}
