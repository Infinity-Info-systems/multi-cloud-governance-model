# Governance Control Map

## Purpose

Use this map to align policy, landing zones, compliance, drift detection, and architecture review under one operating view.

## Control Domains

### 1. Policy Governance

Controls:

- policy definition
- policy approval
- policy publication
- policy exception handling

Evidence:

- policy register
- approval history
- exception log

### Control Signals

| Signal | What It Shows |
| --- | --- |
| Approved policy | The rule is authoritative |
| Exception log | The rule has controlled deviations |
| Version history | The rule is maintained over time |

### 2. Cloud Landing Zones

Controls:

- account and subscription standards
- network segmentation
- identity baseline
- guardrail enforcement

Evidence:

- landing zone blueprint
- landing zone checklist
- baseline configuration output

### Control Signals

| Signal | What It Shows |
| --- | --- |
| Baseline blueprint | The standard exists |
| Config output | The standard is being enforced |
| Checklist completion | The standard is being reviewed |

### 3. Compliance Alignment

Controls:

- regulatory mapping
- security control mapping
- audit readiness
- control coverage review

Evidence:

- compliance matrix
- audit evidence pack
- control attestation log

### Control Signals

| Signal | What It Shows |
| --- | --- |
| Control mapping | The obligation is understood |
| Evidence pack | The obligation can be proven |
| Attestation log | Ownership is explicit |

### 4. Drift Detection

Controls:

- configuration drift monitoring
- exception drift review
- resource baseline checks
- remediation tracking

Evidence:

- drift report
- remediation backlog
- closure history

### Control Signals

| Signal | What It Shows |
| --- | --- |
| Drift report | The issue is visible |
| Backlog item | A fix exists |
| Closure history | The fix was completed |

### 5. Architecture Review

Controls:

- architecture gate review
- design exception review
- cloud solution approval
- change impact assessment

Evidence:

- review record
- decision log
- architecture sign-off

### Control Signals

| Signal | What It Shows |
| --- | --- |
| Review record | The decision was reviewed |
| Decision log | The rationale was captured |
| Sign-off | Approval is traceable |

## Operating Rhythm

Recommended cadence:

1. Weekly policy and drift review
2. Monthly compliance and landing zone review
3. Quarterly architecture and risk review
4. Executive summary for material exceptions

## Control-to-Artifact Linkage

| Domain | Primary Artifact | Supporting Artifact |
| --- | --- | --- |
| Policy Governance | Policy register | Policy review template |
| Cloud Landing Zones | Landing zone blueprint | Landing zone checklist |
| Compliance Alignment | Compliance matrix | Cloud risk assessment |
| Drift Detection | Drift report | Remediation log |
| Architecture Review | Review record | ARB decision log |

## Priority Matrix

| Domain | Typical Risk If Weak | Suggested Priority |
| --- | --- | --- |
| Policy Governance | Inconsistent decisions | High |
| Cloud Landing Zones | Uncontrolled variance | High |
| Compliance Alignment | Audit exposure | High |
| Drift Detection | Silent configuration drift | Medium to High |
| Architecture Review | Design debt and rework | Medium |

## Recommended Use

1. Start with the policy register and landing zone baseline.
2. Map compliance obligations to named controls.
3. Review drift and exceptions on a fixed cadence.
4. Capture architecture decisions in a reusable log.
5. Feed issues into the governance operating model.

## Control Rule

Every control domain should have a clear owner, a clear artifact, and a clear review path.
