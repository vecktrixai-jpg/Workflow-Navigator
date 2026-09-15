import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CALENDLY = "https://calendly.com/vecktrixai/client-meeting";

export const navItems = [
  { label: "Use cases", to: "/use-cases" },
  { label: "Case studies", to: "/case-studies" },
] as const;


export function BrandMark() {
  return <span aria-hidden="true" className="brand-mark"><i /><i /><i /></span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="VECKTRIX AI home"><BrandMark />VECKTRIX AI</Link>
      <nav aria-label="Primary navigation" className="desktop-nav">
        {navItems.map((item) => (
          <Link key={item.label} to={item.to} activeProps={{ className: "is-active" }}>{item.label}</Link>
        ))}
      </nav>
      <Button asChild className="nav-cta"><a href={CALENDLY} target="_blank" rel="noreferrer">Talk to us <ArrowRight /></a></Button>
      <Button variant="ghost" size="icon" className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      <AnimatePresence>
        {open && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>{item.label} <ArrowRight /></Link>
          ))}
          <a href={CALENDLY} target="_blank" rel="noreferrer">Talk to us <ArrowRight /></a>
        </motion.nav>}
      </AnimatePresence>

    </header>
  );
}

export function Eyebrow({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return <p className={cn("eyebrow", invert && "eyebrow-invert")}><span>+</span>{children}</p>;
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("section-title", className)}>{children}</h2>;
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <section className="page-hero section-shell">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="page-title">{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link to="/" className="brand"><BrandMark />VECKTRIX AI</Link>
        <p>Intelligent workflows for complex, document-driven business processes.</p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VECKTRIX AI</span>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="footer-nav-link">{item.label}</Link>
          ))}

        </nav>
        <a href={CALENDLY} target="_blank" rel="noreferrer">Schedule a conversation <ArrowRight /></a>
      </div>
    </footer>
  );
}
