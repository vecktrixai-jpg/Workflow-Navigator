export type CaseStudy = {
  id: string;
  industryId: string;
  industry: string;
  category: string;
  title: string;
  challenge: string[];
  approach: string;
  workflow: string[];
  capabilities: string[];
  impact: string[];
};

export const heroChain = ["Documents", "Understand", "Validate", "Reason", "Decide", "Act"];

export const traditionalFlow = ["Document", "OCR", "Extraction", "Structured data"];

export const vecktrixFlow = [
  "Document",
  "Understand",
  "Validate",
  "Cross-check",
  "Apply rules",
  "Reason",
  "Decide",
  "Execute",
  "Audit",
];

export const industryFilters = [
  { id: "all", label: "All" },
  { id: "banking", label: "Banking & Financial Services" },
  { id: "insurance", label: "Insurance" },
  { id: "healthcare", label: "Healthcare" },
  { id: "construction", label: "Construction & Infrastructure" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "logistics", label: "Logistics & Supply Chain" },
  { id: "grc", label: "GRC / Risk / Compliance" },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    id: "contractor-certification",
    industryId: "construction",
    industry: "Construction & Infrastructure",
    category: "Document-based verification & compliance",
    title: "Contractor certification & site access",
    challenge: [
      "Construction organizations often require contractors and workers to submit multiple documents before receiving project or site access. These may include company registrations, worker identification, safety certifications, insurance documents, training certificates, medical fitness records and equipment certifications.",
      "Teams traditionally review these documents manually, verify expiry dates, cross-check requirements and communicate with contractors regarding missing or invalid documentation.",
      "This creates administrative workload and can delay contractor onboarding and site authorization.",
    ],
    approach:
      "VECKTRIX AI implements an intelligent document workflow that automatically processes contractor documentation, validates compliance requirements and routes exceptions to the appropriate teams.",
    workflow: [
      "Document collection",
      "Document classification",
      "Data extraction",
      "Contractor / worker matching",
      "Expiry validation",
      "Cross-document validation",
      "Project & site rules",
      "Exception detection",
      "Approve / review / reject",
      "Contractor system update",
      "Site access action",
      "Audit trail",
    ],
    capabilities: [
      "Identify and classify documents",
      "Extract relevant information",
      "Associate documents with contractors, workers or equipment",
      "Validate expiry dates",
      "Cross-check information",
      "Apply project-specific rules",
      "Identify missing or inconsistent documentation",
      "Route exceptions",
      "Update contractor-management systems",
      "Trigger notifications",
      "Maintain an audit trail",
    ],
    impact: [
      "Faster contractor onboarding",
      "Reduced repetitive document review",
      "Improved compliance consistency",
      "Better visibility into documentation status",
      "More scalable site-access operations",
    ],
  },
  {
    id: "insurance-claims",
    industryId: "insurance",
    industry: "Insurance",
    category: "Multi-document claims automation",
    title: "Insurance claims processing",
    challenge: [
      "Insurance claims frequently involve multiple documents, including claim forms, policy documents, police reports, photographs, repair estimates, identification documents and supporting evidence.",
      "Claims teams must collect, read, compare and validate this information before determining whether a claim is complete and eligible for further processing.",
    ],
    approach:
      "VECKTRIX AI creates an intelligent claims workflow that brings document understanding, policy validation, cross-document reconciliation and exception handling into a single operational process.",
    workflow: [
      "Claim submission",
      "Document intake",
      "Document classification",
      "Information extraction",
      "Claimant / policy matching",
      "Coverage validation",
      "Cross-document checks",
      "Business & policy rules",
      "Exception detection",
      "Decision routing",
      "Claims system update",
      "Notification",
      "Audit trail",
    ],
    capabilities: [
      "Receive and organize claim documents",
      "Classify documents",
      "Extract claim information",
      "Match documents to claimant and policy",
      "Validate coverage",
      "Compare dates, amounts and entities",
      "Identify missing information",
      "Apply business rules",
      "Route complex cases",
      "Update claims systems",
      "Generate notifications",
      "Maintain audit history",
    ],
    impact: [
      "Faster claims handling",
      "Reduced administrative workload",
      "More consistent processing",
      "Better exception management",
      "Improved operational scalability",
    ],
  },
  {
    id: "kyc-onboarding",
    industryId: "banking",
    industry: "Banking & Financial Services",
    category: "Intelligent customer verification",
    title: "KYC & customer onboarding",
    challenge: [
      "Customer onboarding often requires identity documents, address proof, tax documents, application forms and additional supporting documentation.",
      "Operations teams must verify completeness and consistency before customers can be approved.",
      "Manual review can create delays, particularly when information is distributed across multiple documents and systems.",
    ],
    approach:
      "VECKTRIX AI implements an intelligent onboarding workflow that automatically understands submitted documents, validates customer information, applies defined compliance rules and routes exceptions for review.",
    workflow: [
      "Customer application",
      "Document collection",
      "Classification",
      "Data extraction",
      "Identity matching",
      "Cross-document validation",
      "Completeness check",
      "Compliance rules",
      "Exception detection",
      "Approval",
      "CRM / core system update",
      "Audit trail",
    ],
    capabilities: [
      "Classify documents",
      "Extract customer information",
      "Match identity information",
      "Validate document expiry",
      "Cross-check names, dates and addresses",
      "Apply compliance rules",
      "Identify discrepancies",
      "Request missing documentation",
      "Route exceptions",
      "Integrate with CRM and onboarding systems",
      "Maintain an auditable verification record",
    ],
    impact: [
      "Faster customer onboarding",
      "Reduced manual verification",
      "Consistent validation",
      "Improved compliance visibility",
      "Better operational scalability",
    ],
  },
  {
    id: "supplier-onboarding",
    industryId: "manufacturing",
    industry: "Manufacturing / Procurement",
    category: "Intelligent supplier qualification",
    title: "Supplier onboarding & compliance",
    challenge: [
      "Supplier onboarding can involve business registration documents, tax certificates, bank details, insurance certificates, quality certifications and other compliance documentation.",
      "Procurement teams must verify this information before activating a supplier within enterprise systems.",
    ],
    approach:
      "VECKTRIX AI transforms supplier documentation into an automated qualification workflow that validates documentation, identifies exceptions and connects approved supplier information to procurement systems.",
    workflow: [
      "Supplier application",
      "Document collection",
      "Document classification",
      "Information extraction",
      "Entity matching",
      "Certificate validation",
      "Requirement check",
      "Supplier rules",
      "Exception detection",
      "Review / approval",
      "ERP / procurement update",
      "Supplier notification",
      "Audit trail",
    ],
    capabilities: [
      "Collect supplier documentation",
      "Classify documents",
      "Extract supplier information",
      "Match information across documents",
      "Validate certificates",
      "Check mandatory requirements",
      "Apply supplier-specific policies",
      "Identify missing evidence",
      "Route exceptions",
      "Update ERP / procurement systems",
      "Notify suppliers",
      "Maintain audit trails",
    ],
    impact: [
      "Faster supplier activation",
      "Reduced administrative effort",
      "Improved compliance consistency",
      "Better documentation visibility",
      "Scalable supplier onboarding",
    ],
  },
  {
    id: "audit-evidence",
    industryId: "grc",
    industry: "GRC / Risk / Compliance",
    category: "Intelligent evidence management",
    title: "Audit evidence & compliance automation",
    challenge: [
      "Audit and compliance activities require organizations to collect evidence from multiple departments, systems and business processes.",
      "Evidence may include policies, screenshots, reports, certificates, invoices, access records, system exports and supporting documents.",
      "Compliance teams can spend significant time requesting, organizing, reviewing and validating evidence against individual controls.",
    ],
    approach:
      "VECKTRIX AI implements an intelligent evidence-management workflow that organizes evidence, maps documentation to requirements, identifies gaps and routes exceptions for review.",
    workflow: [
      "Evidence request",
      "Evidence collection",
      "Document understanding",
      "Control mapping",
      "Requirement validation",
      "Date / attribute check",
      "Completeness check",
      "Exception detection",
      "Compliance review",
      "GRC system update",
      "Audit trail",
    ],
    capabilities: [
      "Collect evidence",
      "Classify supporting documents",
      "Extract relevant information",
      "Map evidence to controls",
      "Validate document attributes",
      "Identify missing evidence",
      "Compare evidence against requirements",
      "Apply compliance rules",
      "Flag exceptions",
      "Route evidence for approval",
      "Maintain evidence history",
      "Integrate with GRC platforms",
    ],
    impact: [
      "Reduced evidence-management workload",
      "Improved audit readiness",
      "Better traceability",
      "More consistent evidence validation",
      "Improved operational visibility",
    ],
  },
  {
    id: "trade-documentation",
    industryId: "logistics",
    industry: "Logistics / Supply Chain / Trade",
    category: "Cross-document reconciliation",
    title: "Trade & logistics documentation",
    challenge: [
      "International trade and logistics processes can involve commercial invoices, bills of lading, packing lists, purchase orders, certificates of origin, customs documentation and other supporting records.",
      "Operations teams must verify that information is complete and consistent across documents before goods or transactions can proceed.",
      "Manual comparison creates operational bottlenecks and increases the risk of discrepancies.",
    ],
    approach:
      "VECKTRIX AI connects document intelligence with business rules and enterprise systems to automate document matching, reconciliation and downstream actions.",
    workflow: [
      "Document intake",
      "Classification",
      "Data extraction",
      "Document matching",
      "Cross-document reconciliation",
      "Quantity / value check",
      "Reference validation",
      "Business rules",
      "Exception detection",
      "Decision",
      "ERP / logistics system update",
      "Notification",
      "Audit trail",
    ],
    capabilities: [
      "Receive and classify trade documents",
      "Extract shipment and transaction information",
      "Match related documents",
      "Compare quantities",
      "Compare values",
      "Compare dates",
      "Validate reference numbers",
      "Identify discrepancies",
      "Validate mandatory documentation",
      "Apply organizational rules",
      "Route exceptions",
      "Update enterprise systems",
      "Maintain audit history",
    ],
    impact: [
      "Faster document processing",
      "Reduced repetitive reconciliation",
      "Improved data consistency",
      "Faster exception handling",
      "More scalable trade operations",
    ],
  },
];

export const crossCaseCapabilities = [
  {
    name: "Document-based verification",
    copy: "Verify certifications, identities, policies and supporting evidence.",
  },
  {
    name: "Multi-document compliance",
    copy: "Understand relationships between multiple documents and requirements.",
  },
  {
    name: "Document + business rules",
    copy: "Combine extracted information with organization-specific policies and rules.",
  },
  {
    name: "Cross-document reconciliation",
    copy: "Compare information across documents to identify inconsistencies and exceptions.",
  },
  {
    name: "Document → decision → action",
    copy: "Connect document intelligence directly to enterprise decisions and downstream actions.",
  },
];

export const architectureStack: { label: string; items: string[]; tone: "plain" | "source" | "bridge" | "systems" | "action" }[] = [
  { label: "Customer documents", items: ["Email", "Portal", "WhatsApp", "Scanner", "API"], tone: "plain" },
  {
    label: "Document intelligence",
    items: ["OCR", "Classification", "Extraction", "AI understanding"],
    tone: "source",
  },
  {
    label: "VECKTRIX AI workflow layer",
    items: [
      "Business rules",
      "Validation",
      "Cross-document checks",
      "Reasoning",
      "Exception handling",
      "Approvals",
      "Orchestration",
    ],
    tone: "bridge",
  },
  {
    label: "Enterprise systems",
    items: ["CRM", "ERP", "GRC", "DMS", "Claims", "Procurement", "Databases", "APIs"],
    tone: "systems",
  },
  {
    label: "Business action",
    items: ["Approve", "Reject", "Request information", "Update system", "Notify", "Generate", "Submit", "Archive"],
    tone: "action",
  },
  { label: "Audit trail", items: ["Traceable record of every decision and action"], tone: "plain" },
];

export const businessValueCards = [
  { name: "Reduce manual effort", copy: "Automate repetitive document handling, verification and data-entry activities." },
  { name: "Lower operational overhead", copy: "Reduce repetitive administrative workload and improve operational capacity." },
  { name: "Accelerate turnaround", copy: "Move documents, decisions and approvals through workflows faster." },
  { name: "Scale operations", copy: "Process growing document volumes without proportionally increasing manual effort." },
];
