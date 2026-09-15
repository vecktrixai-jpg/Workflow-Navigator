import { createFileRoute } from "@tanstack/react-router";
import { UseCasesPage } from "@/components/site/use-cases";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases | Document Workflow Automation | VECKTRIX AI" },
      { name: "description", content: "Explore document-driven workflows VECKTRIX AI can automate across banking, insurance, healthcare, construction, logistics, energy, compliance and more." },
      { property: "og:title", content: "Use Cases | Document Workflow Automation | VECKTRIX AI" },
      { property: "og:description", content: "From intake and extraction through validation, business rules, approval and final action — workflows we can automate across 17 industries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UseCasesPage,
});
