# Architecture Review Board

## Purpose

The architecture review board ensures that cloud designs remain aligned to enterprise governance, security, and operational standards.

## What The Board Reviews

- landing zone design
- major cloud service introductions
- network and identity patterns
- platform exceptions
- compliance-impacting changes

## Review Criteria

### 1. Alignment

- does the design follow approved architecture principles?
- does it fit the target operating model?

### 2. Risk

- what is the security impact?
- what is the operational risk?
- what exceptions are required?

### 3. Evidence

- are required documents provided?
- is the control mapping complete?
- is the approval trail recorded?

## Decision Outcomes

- approved
- approved with conditions
- deferred for more information
- rejected

## Example Review Record

| Proposal | Outcome | Condition |
| --- | --- | --- |
| New workload landing zone | Approved with conditions | Logging baseline required |
| Policy exception | Deferred | More evidence required |
| Major network redesign | Approved | Standard segmentation applied |

## Related Artifacts

- [Governance Operating Model](./governance-operating-model.md)
- [Reference Architecture](../docs/reference-architecture.md)
- [Governance Checklist](../templates/governance-checklist.md)
