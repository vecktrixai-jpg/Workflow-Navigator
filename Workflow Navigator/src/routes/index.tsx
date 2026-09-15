import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VECKTRIX AI | Intelligent Business Workflows" },
      { name: "description", content: "VECKTRIX AI implements intelligent, production-ready workflows for complex, document-driven business processes." },
      { property: "og:title", content: "VECKTRIX AI | Intelligent Business Workflows" },
      { property: "og:description", content: "From document intelligence to connected decisions, actions and audit-ready workflows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
