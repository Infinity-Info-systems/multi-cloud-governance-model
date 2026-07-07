# Drift Detection

## Purpose

Drift detection helps governance teams spot when cloud environments move away from the approved baseline.

## Drift Types

- configuration drift
- policy drift
- tagging drift
- identity drift
- network drift
- evidence drift

## Operating Flow

1. Define the baseline.
2. Compare actual state to the baseline.
3. Classify the drift.
4. Assign an owner.
5. Track remediation to closure.

## Example Drift Record

| Drift Type | Severity | Owner | Response |
| --- | --- | --- | --- |
| Configuration drift | High | Platform Engineering | Remediate within SLA |
| Tagging drift | Medium | FinOps | Correct allocation metadata |
| Policy drift | High | Governance Lead | Review exception or enforce policy |

## Recommended Practices

- automate detection where possible
- keep drift findings simple and actionable
- link each finding to a policy or control
- report repeated drift patterns to governance leaders
- classify drift by provider and control domain

## Use

Use this page to keep the team focused on how environments move away from the approved baseline over time.

## Related Artifacts

- [Governance Control Map](./governance-control-map.md)
- [Cloud Governance Checklist](../templates/governance-checklist.md)
- [Cloud Risk Assessment](../templates/cloud-risk-assessment.md)
