# Reference Architecture

## Purpose

This reference architecture shows how governance flows across cloud landing zones, policy controls, review processes, and evidence capture.

## Architecture Layers

### 1. Governance Layer

- policy ownership
- review cadence
- exception handling
- approval authority

### 2. Control Layer

- preventive controls
- detective controls
- corrective controls
- evidence mapping

### 3. Landing Zone Layer

- account and subscription structure
- identity and access baseline
- network segmentation
- standard guardrails

### 4. Review Layer

- architecture review board
- exception review
- change review
- risk acceptance review

### 5. Reporting Layer

- governance scorecards
- drift reports
- compliance status
- executive summaries

## Design Principles

- build one governance model across providers
- keep control ownership explicit
- prefer reusable guardrails over one-off exceptions
- make evidence capture part of the workflow

## Operational Flow

1. A landing zone is requested or changed.
2. Governance checks the policy baseline.
3. The review board approves or rejects the design.
4. Controls are mapped to evidence.
5. Drift and exceptions are monitored over time.

## Related Artifacts

- [Governance Control Map](./governance-control-map.md)
- [Cloud Landing Zones](./cloud-landing-zones.md)
- [Policy Governance](./policy-governance.md)
- [Compliance Alignment](./compliance-alignment.md)
- [Drift Detection](./drift-detection.md)
