import { createFileRoute } from "@tanstack/react-router";
import { CaseStudiesPage } from "@/components/site/case-studies";

const title = "Case Studies | AI-Powered Document Workflow Automation | VECKTRIX AI";
const description =
  "Explore representative document workflow scenarios showing how VECKTRIX AI can automate verification, compliance, onboarding, claims, reconciliation and document-driven business processes.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});
