export const documentTypes = [
  "Certificates", "Invoices", "Contracts", "KYC Documents", "Insurance Documents",
  "Medical Records", "Vendor Documents", "Inspection Reports", "Compliance Evidence",
  "Shipping Documents", "Applications", "Financial Documents",
];

export const humanWorkflow = [
  "Read", "Extract", "Check", "Compare", "Verify", "Apply rules", "Request information",
  "Approve", "Update system", "Audit",
];

export const architecture = [
  { name: "Input", items: ["Email", "Portal", "Scanner", "API", "Mobile", "Enterprise systems"] },
  { name: "Document intelligence", items: ["OCR", "Classification", "Extraction", "Document understanding"] },
  { name: "VECKTRIX AI / Workflow layer", items: ["Business rules", "Cross-document reasoning", "Entity matching", "Validation", "Decision logic", "Exception management", "Human approval", "Orchestration"], featured: true },
  { name: "Enterprise systems", items: ["ERP", "CRM", "HRMS", "GRC", "DMS", "Databases", "APIs", "Legacy applications"] },
  { name: "Business action + audit", items: ["Approve", "Reject", "Escalate", "Create record", "Update system", "Trigger payment", "Evidence", "Decision history"] },
];

export const solutions = [
  { no: "01", title: "Vendor / contractor onboarding", docs: "Registration · Tax · Insurance · Banking · Ownership", flow: ["Collect", "Classify", "Validate", "Verify", "Risk assessment", "Approval", "ERP creation", "Audit"] },
  { no: "02", title: "Invoice exception & approval", docs: "Invoice + PO + Goods receipt + Vendor master", flow: ["Extract", "Match", "Compare", "Validate", "Apply policy", "Detect exception", "Approval", "ERP"] },
  { no: "03", title: "Cross-document reconciliation", docs: "PO ↔ Invoice ↔ Receipt ↔ Contract ↔ Vendor database", flow: ["Quantity mismatch", "Price mismatch", "Date mismatch", "Vendor mismatch", "Missing documentation", "Contract violation"] },
  { no: "04", title: "Audit & compliance evidence", docs: "Policies · Certificates · Reports · Screenshots · Contracts · Logs", flow: ["Collect", "Classify", "Match to controls", "Validate", "Identify gaps", "Request evidence", "Review", "Audit package"] },
];

export const industries = [
  { name: "BFSI", copy: "KYC, lending packs, trade finance and regulated approvals.", code: "01" },
  { name: "Healthcare", copy: "Clinical records, credentials and patient administration workflows.", code: "02" },
  { name: "Insurance", copy: "Claims evidence, policy validation and exception resolution.", code: "03" },
  { name: "Manufacturing", copy: "Quality, supplier, inspection and equipment documentation.", code: "04" },
  { name: "Logistics & Supply Chain", copy: "Shipping records, customs evidence and multi-party reconciliation.", code: "05" },
  { name: "Construction & Infrastructure", copy: "Contractor onboarding, permits, certificates and site compliance.", code: "06" },
  { name: "Energy / Oil & Gas", copy: "Safety evidence, workforce certification and asset integrity records.", code: "07" },
  { name: "GRC & Compliance", copy: "Control evidence, policy mapping and audit-ready decision trails.", code: "08" },
  { name: "Government", copy: "Applications, case records and rules-driven public service processes.", code: "09" },
];

export const complexity = ["Multiple document types", "Cross-document reasoning", "Complex business rules", "External verification", "Multiple enterprise systems", "Exceptions", "Human-in-the-loop", "Regulatory requirements", "High business impact", "Long-running processes"];

export const methods = [
  ["01", "Discover", "Understand the existing workflow."],
  ["02", "Map", "Identify documents, systems, rules, people and exceptions."],
  ["03", "Design", "Design the target automated workflow."],
  ["04", "Implement", "Integrate document intelligence, AI, APIs, systems and workflow engines."],
  ["05", "Deploy", "Production deployment, security, monitoring and governance."],
  ["06", "Optimize", "Measure accuracy, exceptions, processing time and business outcomes."],
] as const;

export const outcomes = [
  ["Discover", "A shared picture of how work really flows today."],
  ["Map", "A complete inventory of documents, systems, rules and exceptions."],
  ["Design", "A target workflow your teams can review and trust."],
  ["Implement", "Working integrations across intelligence, systems and people."],
  ["Deploy", "A governed, monitored production workflow."],
  ["Optimize", "Measured improvements in accuracy, speed and outcomes."],
] as const;
