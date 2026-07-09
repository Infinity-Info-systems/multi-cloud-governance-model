import {
  getGovernanceCadence,
  getGovernanceDomainSummary,
  getGovernancePriorityMatrix,
} from "./governanceRegistry";

export function buildGovernanceReport() {
  return {
    summary: getGovernanceDomainSummary(),
    cadence: getGovernanceCadence(),
    priorityMatrix: getGovernancePriorityMatrix(),
  };
}
