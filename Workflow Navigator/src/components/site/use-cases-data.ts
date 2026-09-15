export type UseCase = {
  name: string;
  description: string;
  documents: string[];
  flow: string[];
  outcome: string;
};

export type IndustryUseCases = {
  id: string;
  short: string;
  name: string;
  description: string;
  cases: UseCase[];
};

export const industryUseCases: IndustryUseCases[] = [
  {
    id: "banking",
    short: "Banking & Financial Services",
    name: "Banking & Financial Services",
    description: "Automate document-heavy financial workflows across onboarding, lending, compliance and transaction processing.",
    cases: [
      {
        name: "KYC & Customer Onboarding",
        description: "Turn a customer application and its supporting documents into a verified, compliance-checked onboarding decision.",
        documents: ["Identity documents", "Address proof", "Tax documents", "Application forms", "Supporting documents"],
        flow: ["Customer application", "KYC documents", "Document classification", "Data extraction", "Identity verification", "Cross-document validation", "Risk / compliance rules", "Approval", "Core banking / CRM update"],
        outcome: "Verified customer created in core banking and CRM with a complete audit trail.",
      },
      {
        name: "Loan & Credit Processing",
        description: "Assemble income, banking and financial evidence into a validated credit decision package.",
        documents: ["Loan application", "Income documents", "Bank statements", "Financial statements"],
        flow: ["Loan application", "Income documents", "Bank statements", "Financial documents", "Data extraction", "Financial validation", "Eligibility rules", "Credit decision", "Approval", "Loan system update"],
        outcome: "Decision-ready credit file and updated loan system record.",
      },
      {
        name: "Mortgage Processing",
        description: "Validate identity, income and property evidence against underwriting criteria before approval.",
        documents: ["Mortgage application", "Identity documents", "Income documents", "Property documents", "Bank statements"],
        flow: ["Mortgage application", "Identity", "Income", "Property documents", "Bank statements", "Cross-document validation", "Eligibility", "Underwriting", "Approval"],
        outcome: "Underwriting-ready file with exceptions surfaced early.",
      },
      {
        name: "Trade Finance",
        description: "Match commercial trade documents against each other and against compliance requirements.",
        documents: ["Commercial invoice", "Bill of lading", "Letter of credit", "Packing list"],
        flow: ["Trade request", "Commercial invoice", "Bill of lading", "Letter of credit", "Packing list", "Document matching", "Compliance checks", "Exception handling", "Approval", "Transaction processing"],
        outcome: "Discrepancies flagged and compliant transactions processed.",
      },
      {
        name: "Account Opening",
        description: "Verify applicant documents and compliance requirements before account creation.",
        documents: ["Application form", "Identity documents", "Supporting documents"],
        flow: ["Application", "Identity documents", "Verification", "Compliance checks", "Approval", "Account creation"],
        outcome: "Account created with verified, audit-ready evidence.",
      },
      {
        name: "Financial Compliance",
        description: "Extract regulatory data points and test them against rules, risk checks and exception thresholds.",
        documents: ["Regulatory filings", "Transaction records", "Policy documents"],
        flow: ["Documents", "Data extraction", "Regulatory rules", "Risk checks", "Exception detection", "Compliance review", "Audit evidence"],
        outcome: "Structured audit evidence with exceptions routed for review.",
      },
    ],
  },
  {
    id: "insurance",
    short: "Insurance",
    name: "Insurance",
    description: "Automate claims, underwriting and policy documentation while keeping adjusters and underwriters in control of judgment.",
    cases: [
      {
        name: "Claims Processing",
        description: "Assemble the full claim evidence set, validate coverage and route the decision.",
        documents: ["Claim form", "Policy document", "Police report", "Photos", "Repair estimate"],
        flow: ["Claim", "Claim form", "Policy", "Police report", "Photos", "Repair estimate", "Document validation", "Coverage check", "Fraud indicators", "Decision", "Claims system update"],
        outcome: "Faster claim decisions with consistent coverage checks.",
      },
      {
        name: "Underwriting",
        description: "Validate financial and asset evidence against underwriting rules to produce a risk assessment.",
        documents: ["Application", "Financial documents", "Property / asset documents", "Risk information"],
        flow: ["Application", "Financial documents", "Property / asset documents", "Risk information", "Validation", "Underwriting rules", "Risk assessment", "Decision"],
        outcome: "Consistent, evidence-backed underwriting decisions.",
      },
      {
        name: "Policy Verification",
        description: "Check policy documents, customer data and coverage details against business rules.",
        documents: ["Policy documents", "Customer information", "Coverage schedule"],
        flow: ["Policy documents", "Customer information", "Coverage details", "Validation", "Business rules", "Verification", "System update"],
        outcome: "Verified policy records synced to the policy system.",
      },
      {
        name: "Insurance Onboarding",
        description: "Verify new customer documentation and risk checks before policy issuance.",
        documents: ["Application", "Identity documents", "Supporting documents"],
        flow: ["Customer", "Application", "Identity", "Supporting documents", "Verification", "Risk checks", "Approval", "Policy issuance"],
        outcome: "Policies issued with complete, validated documentation.",
      },
    ],
  },
  {
    id: "healthcare",
    short: "Healthcare",
    name: "Healthcare",
    description: "Automate patient, payer and provider documentation workflows where accuracy and eligibility rules matter.",
    cases: [
      {
        name: "Patient Onboarding",
        description: "Verify identity, insurance and medical documents to create a complete patient record.",
        documents: ["Identity documents", "Insurance card", "Medical documents"],
        flow: ["Patient registration", "Identity", "Insurance", "Medical documents", "Verification", "Eligibility", "Patient record creation"],
        outcome: "Complete patient record with verified eligibility.",
      },
      {
        name: "Insurance Claims",
        description: "Validate clinical and billing documentation against coverage rules before payer submission.",
        documents: ["Medical records", "Claim forms", "Bills", "Insurance documents"],
        flow: ["Medical records", "Claim forms", "Bills", "Insurance documents", "Validation", "Coverage rules", "Claim decision", "Payer system"],
        outcome: "Cleaner claims with fewer avoidable rejections.",
      },
      {
        name: "Prior Authorization",
        description: "Assemble the clinical evidence set and test it against policy and eligibility rules.",
        documents: ["Medical records", "Diagnosis", "Treatment plan", "Insurance policy"],
        flow: ["Doctor request", "Medical records", "Diagnosis", "Treatment plan", "Insurance policy", "Eligibility rules", "Medical review", "Approval / denial"],
        outcome: "Faster authorization turnaround with clinical review preserved.",
      },
      {
        name: "Provider Credentialing",
        description: "Verify licences, certifications and background documents against credentialing requirements.",
        documents: ["Licence", "Certifications", "Education records", "Insurance", "Background documents"],
        flow: ["Provider application", "Licence", "Certifications", "Education", "Insurance", "Background documents", "Verification", "Approval", "Provider database"],
        outcome: "Credentialed providers recorded with expiry tracking.",
      },
      {
        name: "Medical Billing",
        description: "Turn clinical documentation into validated, coded and submission-ready claims.",
        documents: ["Medical documents", "Procedure records", "Insurance documents"],
        flow: ["Medical documents", "Procedures", "Billing codes", "Insurance", "Validation", "Rules", "Claim generation", "Submission"],
        outcome: "Validated claims generated and submitted automatically.",
      },
    ],
  },
  {
    id: "construction",
    short: "Construction & Infrastructure",
    name: "Construction & Infrastructure",
    description: "One of the densest document workflow categories: contractors, workers, equipment and projects each carry expiring, multi-party documentation.",
    cases: [
      {
        name: "Contractor Onboarding",
        description: "Validate contractor registration, insurance, certifications and worker documents against site compliance rules.",
        documents: ["Registration", "Insurance", "Certifications", "Worker documents"],
        flow: ["Contractor application", "Registration", "Insurance", "Certifications", "Worker documents", "Validation", "Compliance rules", "Approval", "Contractor system"],
        outcome: "Approved contractors with a complete, verifiable compliance file.",
      },
      {
        name: "Worker Certification & Site Access",
        description: "Check every worker credential, its validity window and the site's requirements before access is granted.",
        documents: ["Safety certificate", "Training certificate", "Medical fitness", "Identity"],
        flow: ["Worker documents", "Safety certificate", "Training certificate", "Medical fitness", "Identity", "Expiry checks", "Site requirements", "Approval", "Access authorization"],
        outcome: "Only compliant, in-date workers are authorized on site.",
      },
      {
        name: "Equipment Compliance",
        description: "Validate inspection, insurance and registration documents against project requirements.",
        documents: ["Inspection certificate", "Insurance", "Registration"],
        flow: ["Equipment documents", "Inspection certificate", "Insurance", "Registration", "Expiry checks", "Project requirements", "Approval"],
        outcome: "Certified equipment cleared for project use.",
      },
      {
        name: "Project Compliance",
        description: "Consolidate contractor, inspection and safety evidence into an auditable project compliance record.",
        documents: ["Contractor records", "Inspection reports", "Safety evidence"],
        flow: ["Project documents", "Contractor records", "Inspection reports", "Safety evidence", "Compliance rules", "Exception detection", "Approval", "Audit record"],
        outcome: "Audit-ready project compliance position at any point in time.",
      },
    ],
  },
  {
    id: "manufacturing",
    short: "Manufacturing",
    name: "Manufacturing",
    description: "Automate supplier, quality and procurement documentation across the production chain.",
    cases: [
      {
        name: "Supplier Onboarding",
        description: "Validate registration, tax, certification and banking documents before adding a supplier to the master.",
        documents: ["Registration", "Tax documents", "Certifications", "Bank details"],
        flow: ["Supplier application", "Registration", "Tax documents", "Certifications", "Bank details", "Validation", "Risk rules", "Approval", "ERP / supplier master"],
        outcome: "Approved suppliers created directly in the ERP supplier master.",
      },
      {
        name: "Quality Certificate Verification",
        description: "Check quality certificates against product specifications and validity requirements.",
        documents: ["Quality certificate", "Product information", "Specifications"],
        flow: ["Supplier", "Quality certificate", "Product information", "Specifications", "Validation", "Expiry check", "Quality rules", "Approval"],
        outcome: "Certified material accepted with traceable evidence.",
      },
      {
        name: "Purchase Order Processing",
        description: "Match purchase orders, invoices and delivery documents and route exceptions for resolution.",
        documents: ["Purchase order", "Invoice", "Delivery documents"],
        flow: ["PO", "Supplier documents", "Invoice", "Delivery documents", "Matching", "Validation", "Exception handling", "ERP update"],
        outcome: "Three-way matched transactions posted to the ERP.",
      },
      {
        name: "Inspection Documentation",
        description: "Validate inspection reports against product data, certificates and quality rules.",
        documents: ["Inspection report", "Product data", "Certificates", "Specifications"],
        flow: ["Inspection report", "Product data", "Certificates", "Specifications", "Validation", "Quality rules", "Decision", "Record update"],
        outcome: "Inspection outcomes recorded consistently and traceably.",
      },
    ],
  },
  {
    id: "logistics",
    short: "Logistics & Supply Chain",
    name: "Logistics & Supply Chain",
    description: "Automate shipment, delivery, customs and vendor documentation where cross-document matching drives the process.",
    cases: [
      {
        name: "Freight Documentation",
        description: "Match shipping documents against each other and against customs requirements.",
        documents: ["Commercial invoice", "Packing list", "Bill of lading"],
        flow: ["Shipment", "Commercial invoice", "Packing list", "Bill of lading", "Document matching", "Validation", "Customs rules", "Clearance"],
        outcome: "Clearance-ready document sets with discrepancies flagged.",
      },
      {
        name: "Proof of Delivery",
        description: "Cross-check delivery evidence against order and invoice data to detect exceptions.",
        documents: ["POD", "Invoice", "Order", "Signature"],
        flow: ["Delivery", "POD", "Invoice", "Order", "Signature", "Cross-check", "Exception detection", "ERP update"],
        outcome: "Confirmed deliveries posted and disputes surfaced early.",
      },
      {
        name: "Customs Documentation",
        description: "Classify and validate customs paperwork against compliance rules before submission.",
        documents: ["Invoice", "Packing list", "Customs documents"],
        flow: ["Shipment", "Invoice", "Packing list", "Customs documents", "Classification", "Compliance checks", "Exception handling", "Submission"],
        outcome: "Compliant customs submissions with fewer rework cycles.",
      },
      {
        name: "Vendor Documentation",
        description: "Validate vendor registration, tax, insurance and compliance certificates.",
        documents: ["Registration", "Tax documents", "Insurance", "Compliance certificates"],
        flow: ["Vendor", "Registration", "Tax", "Insurance", "Compliance certificates", "Validation", "Approval", "Vendor system"],
        outcome: "Vendors activated with validated, in-date documentation.",
      },
    ],
  },
  {
    id: "energy",
    short: "Energy & Oil & Gas",
    name: "Energy & Oil & Gas",
    description: "Automate contractor, equipment and HSE documentation in high-compliance operating environments.",
    cases: [
      {
        name: "Contractor Compliance",
        description: "Validate contractor and worker documentation against site-specific safety rules.",
        documents: ["Certifications", "Safety documents", "Insurance", "Worker records"],
        flow: ["Contractor", "Certifications", "Safety documents", "Insurance", "Worker records", "Validation", "Site rules", "Approval", "Access"],
        outcome: "Site access granted only against verified compliance.",
      },
      {
        name: "Equipment Certification",
        description: "Track inspection, safety and maintenance documentation and their validity windows.",
        documents: ["Inspection report", "Safety certificate", "Maintenance records"],
        flow: ["Equipment", "Inspection", "Safety certificate", "Maintenance records", "Expiry", "Compliance rules", "Approval"],
        outcome: "Certified assets with proactive expiry management.",
      },
      {
        name: "HSE Documentation",
        description: "Validate inspection, certificate and incident documentation against compliance rules.",
        documents: ["Inspection records", "Certificates", "Incident documents"],
        flow: ["Reports", "Inspection records", "Certificates", "Incident documents", "Validation", "Compliance rules", "Exception detection", "Audit evidence"],
        outcome: "Continuously audit-ready HSE evidence.",
      },
      {
        name: "Maintenance Documentation",
        description: "Validate maintenance requests against equipment, service and parts records.",
        documents: ["Maintenance request", "Equipment records", "Service reports", "Parts documents"],
        flow: ["Maintenance request", "Equipment records", "Service reports", "Parts documents", "Validation", "Approval", "Asset management system"],
        outcome: "Approved maintenance recorded against the asset register.",
      },
    ],
  },
  {
    id: "grc",
    short: "GRC, Risk & Compliance",
    name: "GRC, Risk & Compliance",
    description: "Automate the evidence work behind controls, assessments and regulatory obligations.",
    cases: [
      {
        name: "Audit Evidence Collection",
        description: "Classify incoming evidence, map it to controls and route exceptions to auditors.",
        documents: ["Evidence requests", "Policies", "Supporting documents"],
        flow: ["Control", "Evidence request", "Documents", "Classification", "Extraction", "Control mapping", "Validation", "Exception", "Auditor review", "Evidence repository"],
        outcome: "Mapped, reviewable evidence held in a single repository.",
      },
      {
        name: "Third-Party Risk",
        description: "Assess vendor questionnaires and supporting documents against risk rules.",
        documents: ["Questionnaire", "Certifications", "Policies", "Financial documents"],
        flow: ["Vendor", "Questionnaire", "Certifications", "Policies", "Financial documents", "Risk rules", "Assessment", "Risk rating", "Approval"],
        outcome: "Consistent risk ratings with documented justification.",
      },
      {
        name: "Compliance Certification",
        description: "Validate certificates, policies and evidence against regulatory requirements and expiry.",
        documents: ["Certificates", "Policies", "Supporting evidence"],
        flow: ["Organization", "Certificates", "Policies", "Supporting evidence", "Validation", "Expiry", "Regulatory rules", "Approval", "Compliance record"],
        outcome: "Live compliance record with expiry-driven follow-up.",
      },
      {
        name: "Regulatory Documentation",
        description: "Map required evidence to regulatory rules and prepare submissions.",
        documents: ["Required evidence", "Regulatory documents"],
        flow: ["Regulation", "Required evidence", "Documents", "Validation", "Rule mapping", "Exceptions", "Review", "Submission"],
        outcome: "Complete, reviewed regulatory submissions.",
      },
    ],
  },
  {
    id: "government",
    short: "Government & Public Sector",
    name: "Government & Public Sector",
    description: "Automate citizen-facing document processes where eligibility rules and verification drive turnaround times.",
    cases: [
      {
        name: "Citizen Applications",
        description: "Verify applicant documents against eligibility rules and route decisions.",
        documents: ["Identity documents", "Supporting documents"],
        flow: ["Application", "Identity", "Supporting documents", "Verification", "Eligibility rules", "Approval", "Government system"],
        outcome: "Faster application turnaround with consistent decisions.",
      },
      {
        name: "License & Permit Processing",
        description: "Validate submitted documents against regulatory criteria before issuance.",
        documents: ["Application", "Supporting documents"],
        flow: ["Application", "Documents", "Verification", "Regulatory rules", "Review", "Approval", "License issuance"],
        outcome: "Licences issued with a complete decision record.",
      },
      {
        name: "Benefits / Scheme Eligibility",
        description: "Test identity and income evidence against scheme eligibility rules.",
        documents: ["Identity documents", "Income documents", "Supporting documents"],
        flow: ["Application", "Identity", "Income", "Supporting documents", "Eligibility rules", "Verification", "Decision", "Benefit processing"],
        outcome: "Eligible applicants processed with auditable reasoning.",
      },
      {
        name: "Certificate Verification",
        description: "Validate certificates against issuer and applicant records.",
        documents: ["Certificate", "Issuer records", "Applicant records"],
        flow: ["Certificate", "Issuer", "Applicant", "Database", "Validation", "Verification", "Decision"],
        outcome: "Verified certificates with tamper-evident checks.",
      },
    ],
  },
  {
    id: "legal",
    short: "Legal & Professional Services",
    name: "Legal & Professional Services",
    description: "Automate intake, contract review and diligence workflows across large document sets.",
    cases: [
      {
        name: "Contract Review Workflow",
        description: "Extract clauses, compare against policy positions and route risk for review.",
        documents: ["Contracts", "Policy playbook"],
        flow: ["Contract", "Clause extraction", "Risk identification", "Policy rules", "Comparison", "Review", "Approval", "Contract system"],
        outcome: "Reviewed contracts with risks surfaced and logged.",
      },
      {
        name: "Legal Matter Intake",
        description: "Classify incoming matter documents and create a structured case file.",
        documents: ["Client documents", "Case information"],
        flow: ["Client request", "Documents", "Case information", "Classification", "Data extraction", "Validation", "Assignment", "Case system"],
        outcome: "Structured matters assigned without manual data entry.",
      },
      {
        name: "Legal Due Diligence",
        description: "Analyse contracts, corporate and financial records across documents to detect risk.",
        documents: ["Contracts", "Corporate records", "Financial documents"],
        flow: ["Documents", "Contracts", "Corporate records", "Financial documents", "Cross-document analysis", "Risk detection", "Review", "Report"],
        outcome: "Diligence findings assembled into a review-ready report.",
      },
    ],
  },
  {
    id: "real-estate",
    short: "Real Estate & Property",
    name: "Real Estate & Property",
    description: "Automate tenant, property and financing documentation with cross-document verification.",
    cases: [
      {
        name: "Tenant Onboarding",
        description: "Verify identity, income and employment evidence against tenancy criteria.",
        documents: ["ID", "Income documents", "Employment letter", "Supporting documents"],
        flow: ["Application", "ID", "Income", "Employment", "Supporting documents", "Verification", "Eligibility", "Approval", "Property system"],
        outcome: "Approved tenancies recorded in the property system.",
      },
      {
        name: "Property Due Diligence",
        description: "Cross-check ownership, legal records, approvals and certificates for risk.",
        documents: ["Ownership records", "Legal records", "Approvals", "Certificates"],
        flow: ["Property documents", "Ownership", "Legal records", "Approvals", "Certificates", "Cross-check", "Risk detection", "Decision"],
        outcome: "Documented diligence position before transaction.",
      },
      {
        name: "Mortgage / Property Documentation",
        description: "Validate property, income and identity documents against lending rules.",
        documents: ["Property documents", "Income documents", "Identity documents"],
        flow: ["Application", "Property documents", "Income", "Identity", "Validation", "Risk rules", "Approval"],
        outcome: "Complete, validated financing files.",
      },
    ],
  },
  {
    id: "education",
    short: "Education",
    name: "Education",
    description: "Automate admissions, credential verification and faculty documentation.",
    cases: [
      {
        name: "Student Admission",
        description: "Verify academic and identity documents against admission criteria.",
        documents: ["Identity documents", "Academic certificates", "Supporting documents"],
        flow: ["Application", "Identity", "Academic certificates", "Supporting documents", "Verification", "Eligibility", "Approval", "Student system"],
        outcome: "Admitted students created in the student system.",
      },
      {
        name: "Certificate Verification",
        description: "Validate certificates against student and institution records.",
        documents: ["Certificate", "Student record", "Institution record"],
        flow: ["Certificate", "Student record", "Institution", "Validation", "Verification", "Result"],
        outcome: "Verified credentials with a recorded result.",
      },
      {
        name: "Faculty Credentialing",
        description: "Verify degrees, certifications, experience and background documents.",
        documents: ["Degree", "Certifications", "Experience records", "Background documents"],
        flow: ["Faculty application", "Degree", "Certifications", "Experience", "Background documents", "Verification", "Approval"],
        outcome: "Credentialed faculty with traceable verification.",
      },
    ],
  },
  {
    id: "retail",
    short: "Retail & E-commerce",
    name: "Retail & E-commerce",
    description: "Automate merchant, supplier and returns documentation across commerce operations.",
    cases: [
      {
        name: "Merchant Onboarding",
        description: "Validate business, tax, banking and KYC documents against risk rules.",
        documents: ["Business documents", "Tax documents", "Bank details", "KYC documents"],
        flow: ["Merchant application", "Business documents", "Tax", "Bank details", "KYC", "Validation", "Risk rules", "Approval", "Merchant system"],
        outcome: "Merchants activated faster with consistent risk checks.",
      },
      {
        name: "Supplier Onboarding",
        description: "Verify supplier registration, tax, banking and certification documents.",
        documents: ["Registration", "Tax documents", "Bank details", "Certifications"],
        flow: ["Supplier", "Registration", "Tax", "Bank", "Certifications", "Verification", "Approval", "Procurement system"],
        outcome: "Procurement-ready suppliers with validated records.",
      },
      {
        name: "Return / Refund Documentation",
        description: "Check return evidence against invoice, product data and refund policy.",
        documents: ["Invoice", "Product information", "Return evidence"],
        flow: ["Return request", "Invoice", "Product information", "Evidence", "Policy rules", "Decision", "Refund"],
        outcome: "Policy-consistent refund decisions at scale.",
      },
    ],
  },
  {
    id: "automotive",
    short: "Automotive",
    name: "Automotive",
    description: "Automate dealer, claims and vehicle documentation workflows.",
    cases: [
      {
        name: "Dealer Onboarding",
        description: "Validate business, financial and certification documents for new dealers.",
        documents: ["Business documents", "Financial documents", "Certifications"],
        flow: ["Dealer application", "Business documents", "Financial documents", "Certifications", "Validation", "Risk assessment", "Approval"],
        outcome: "Dealers onboarded with a documented risk position.",
      },
      {
        name: "Vehicle Insurance Claims",
        description: "Validate claim evidence against policy coverage and route the decision.",
        documents: ["Registration", "Insurance policy", "Photos", "Repair estimate"],
        flow: ["Claim", "Registration", "Insurance", "Photos", "Repair estimate", "Validation", "Coverage", "Decision", "Claim system"],
        outcome: "Faster, consistent claim outcomes.",
      },
      {
        name: "Vehicle Documentation",
        description: "Track registration, insurance, inspection and certificate validity.",
        documents: ["Registration", "Insurance", "Inspection report", "Certificates"],
        flow: ["Vehicle", "Registration", "Insurance", "Inspection", "Certificates", "Expiry", "Validation", "Compliance decision"],
        outcome: "Fleet compliance maintained through expiry monitoring.",
      },
    ],
  },
  {
    id: "pharma",
    short: "Pharmaceuticals & Life Sciences",
    name: "Pharmaceuticals & Life Sciences",
    description: "Automate qualification, clinical and regulatory documentation under strict traceability requirements.",
    cases: [
      {
        name: "Supplier Qualification",
        description: "Validate certifications, regulatory documents and quality records against qualification rules.",
        documents: ["Certifications", "Regulatory documents", "Quality records"],
        flow: ["Supplier", "Certifications", "Regulatory documents", "Quality records", "Validation", "Risk rules", "Approval"],
        outcome: "Qualified suppliers with complete documentary evidence.",
      },
      {
        name: "Clinical Documentation",
        description: "Classify and validate clinical documents, lab reports and consent records.",
        documents: ["Clinical documents", "Lab reports", "Consent forms"],
        flow: ["Patient", "Clinical documents", "Lab reports", "Consent", "Classification", "Validation", "Compliance", "Record update"],
        outcome: "Compliant clinical records with traceable validation.",
      },
      {
        name: "Regulatory Submission",
        description: "Check submission packages for completeness against regulatory rules.",
        documents: ["Submission documents", "Supporting evidence"],
        flow: ["Documents", "Classification", "Extraction", "Validation", "Regulatory rules", "Completeness check", "Review", "Submission"],
        outcome: "Complete submissions assembled and reviewed before filing.",
      },
    ],
  },
  {
    id: "aviation",
    short: "Aviation",
    name: "Aviation",
    description: "Automate credential, airworthiness and vendor documentation with strict expiry and regulatory control.",
    cases: [
      {
        name: "Crew Credential Verification",
        description: "Validate licences, training, medical and certification records against regulatory rules.",
        documents: ["Licence", "Training records", "Medical certificate", "Certifications"],
        flow: ["Employee", "Licence", "Training", "Medical", "Certifications", "Expiry", "Regulatory rules", "Approval"],
        outcome: "Only current, compliant crew credentials are approved.",
      },
      {
        name: "Aircraft Documentation",
        description: "Validate maintenance, inspection, certification and parts records for compliance.",
        documents: ["Maintenance records", "Inspection report", "Certifications", "Parts records"],
        flow: ["Aircraft", "Maintenance records", "Inspection", "Certifications", "Parts records", "Validation", "Compliance", "Approval"],
        outcome: "Documented airworthiness position maintained continuously.",
      },
      {
        name: "Vendor Compliance",
        description: "Verify vendor certifications, insurance and safety documents against risk rules.",
        documents: ["Certifications", "Insurance", "Safety documents"],
        flow: ["Vendor", "Certifications", "Insurance", "Safety documents", "Verification", "Risk rules", "Approval"],
        outcome: "Approved vendors with validated compliance records.",
      },
    ],
  },
  {
    id: "hospitality",
    short: "Hospitality & Travel",
    name: "Hospitality & Travel",
    description: "Automate vendor, guest and travel documentation across properties and bookings.",
    cases: [
      {
        name: "Hotel Vendor Onboarding",
        description: "Validate vendor registration, tax, insurance and certification documents.",
        documents: ["Registration", "Tax documents", "Insurance", "Certifications"],
        flow: ["Vendor", "Registration", "Tax", "Insurance", "Certifications", "Validation", "Approval"],
        outcome: "Vendors approved with complete documentation.",
      },
      {
        name: "Guest Documentation",
        description: "Verify guest identity and booking documents and update the property system.",
        documents: ["Identity documents", "Booking confirmation", "Supporting documents"],
        flow: ["Guest", "Identity", "Booking", "Supporting documents", "Verification", "PMS update"],
        outcome: "Faster check-in with verified guest records.",
      },
      {
        name: "Travel Document Processing",
        description: "Validate passport, visa and supporting documents against eligibility rules.",
        documents: ["Passport", "Visa", "Supporting documents"],
        flow: ["Application", "Passport", "Visa", "Supporting documents", "Validation", "Eligibility", "Approval"],
        outcome: "Eligibility decisions made on validated documents.",
      },
    ],
  },
];

export const heroDocumentTypes = ["PDF", "Certificate", "Invoice", "Form", "Contract", "Report", "ID", "Claim"];
export const heroWorkflow = ["Documents", "Understand", "Validate", "Reason", "Decide", "Act"];
export const heroTargets = ["CRM", "ERP", "DMS", "Database", "Portal", "Approval", "Notification"];

export const crossIndustryPatterns = [
  { name: "Document-based verification & certification", flow: ["Documents", "Extract", "Verify", "Validate", "Approve"] },
  { name: "Multi-document compliance & onboarding", flow: ["Document package", "Completeness", "Cross-check", "Rules", "Approval"] },
  { name: "Document + business rules + decisioning", flow: ["Documents", "Data", "Rules", "Reasoning", "Decision"] },
  { name: "Cross-document reconciliation", flow: ["Document A", "Document B", "System data", "Detect differences", "Resolve"] },
  { name: "Document → decision → enterprise action", flow: ["Documents", "Intelligence", "Decision", "CRM / ERP / DMS / API", "Action"] },
];

export const capabilityNodes = [
  "Document intake", "Classification", "Data extraction", "Document splitting",
  "Entity matching", "Cross-document validation", "Business rules", "Policy checks",
  "Expiry validation", "Exception detection", "AI reasoning", "Human-in-the-loop",
  "Approval routing", "System integration", "Notifications", "Audit trail",
];

export const useCaseOutcomes = [
  { title: "Reduce manual effort", copy: "Shift repetitive reading, checking and re-keying into an automated workflow." },
  { title: "Lower operational overhead", copy: "Fewer handoffs, fewer chasing emails, fewer spreadsheets holding the process together." },
  { title: "Accelerate turnaround time", copy: "Documents move continuously instead of waiting in queues between teams." },
  { title: "Scale document operations", copy: "Handle volume growth without growing the manual processing team proportionally." },
];

export const architectureLayers = [
  { label: "Existing document intelligence", items: ["AWS", "Azure", "Google", "UiPath", "ABBYY", "OCR", "LLMs"], tone: "source" },
  { label: "VECKTRIX AI — custom business workflow", items: ["Business rules", "Validation", "Reasoning", "Exceptions", "Approvals", "Integrations"], tone: "bridge" },
  { label: "Enterprise systems", items: ["CRM", "ERP", "DMS", "Database", "Portals"], tone: "systems" },
  { label: "Business action", items: ["Approved", "Updated", "Notified", "Submitted"], tone: "action" },
];
