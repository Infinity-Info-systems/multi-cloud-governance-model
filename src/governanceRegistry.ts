export type GovernanceDomain = {
  id: string;
  name: string;
  purpose: string;
  controls: string[];
  evidence: string[];
  signals: string[];
  priority: "High" | "Medium" | "Low";
  owner: string;
};

export const governanceDomains: GovernanceDomain[] = [
  {
    id: "policy-governance",
    name: "Policy Governance",
    purpose: "Define, approve, and publish the rules that guide multi-cloud behavior.",
    controls: [
      "policy definition",
      "policy approval",
      "policy publication",
      "policy exception handling",
    ],
    evidence: ["policy register", "approval history", "exception log"],
    signals: ["Approved policy", "Exception log", "Version history"],
    priority: "High",
    owner: "Cloud governance lead",
  },
  {
    id: "landing-zones",
    name: "Cloud Landing Zones",
    purpose: "Standardize the approved baseline for new cloud environments.",
    controls: [
      "account and subscription standards",
      "network segmentation",
      "identity baseline",
      "guardrail enforcement",
    ],
    evidence: [
      "landing zone blueprint",
      "landing zone checklist",
      "baseline configuration output",
    ],
    signals: ["Baseline blueprint", "Config output", "Checklist completion"],
    priority: "High",
    owner: "Platform engineering lead",
  },
  {
    id: "compliance-alignment",
    name: "Compliance Alignment",
    purpose: "Map cloud controls to obligations and proof requirements.",
    controls: [
      "regulatory mapping",
      "security control mapping",
      "audit readiness",
      "control coverage review",
    ],
    evidence: ["compliance matrix", "audit evidence pack", "control attestation log"],
    signals: ["Control mapping", "Evidence pack", "Attestation log"],
    priority: "High",
    owner: "Security and compliance lead",
  },
  {
    id: "drift-detection",
    name: "Drift Detection",
    purpose: "Identify and review changes that move environments away from the baseline.",
    controls: [
      "configuration drift monitoring",
      "exception drift review",
      "resource baseline checks",
      "remediation tracking",
    ],
    evidence: ["drift report", "remediation backlog", "closure history"],
    signals: ["Drift report", "Backlog item", "Closure history"],
    priority: "Medium",
    owner: "Operations lead",
  },
  {
    id: "architecture-review",
    name: "Architecture Review",
    purpose: "Ensure design decisions are visible and approved before deployment.",
    controls: [
      "architecture gate review",
      "design exception review",
      "cloud solution approval",
      "change impact assessment",
    ],
    evidence: ["review record", "decision log", "architecture sign-off"],
    signals: ["Review record", "Decision log", "Sign-off"],
    priority: "Medium",
    owner: "Architecture review board",
  },
];

export function getGovernanceDomainSummary() {
  return governanceDomains.map((domain) => ({
    id: domain.id,
    name: domain.name,
    priority: domain.priority,
    owner: domain.owner,
    evidenceCount: domain.evidence.length,
    controlCount: domain.controls.length,
  }));
}

export function getGovernanceCadence() {
  return [
    { cadence: "Weekly", focus: "Policy and drift review" },
    { cadence: "Monthly", focus: "Compliance and landing zone review" },
    { cadence: "Quarterly", focus: "Architecture and risk review" },
    { cadence: "Executive", focus: "Material exceptions summary" },
  ];
}

export function getGovernancePriorityMatrix() {
  return governanceDomains.map((domain) => ({
    domain: domain.name,
    priority: domain.priority,
    owner: domain.owner,
    riskIfWeak:
      domain.priority === "High"
        ? "Material governance exposure"
        : "Design debt and drift risk",
  }));
}
