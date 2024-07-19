import { GatheringAction } from './actions/gathering-action';
import { SimulationFailCause } from './simulation-fail-cause.enum';
import { StepState } from './step-state';

export interface ActionResult {
  // Action used
  action: GatheringAction;
  // Did the success hit?
  success: boolean | null;
  // If it failed, why?
  failCause?: SimulationFailCause;
  // Integrity added to the node (negative if removed)
  addedIntegrity: number;
  // GP added to the character (negative if removed)
  gpDifference: number;
  // If the action is skipped because intregity reached 0
  skipped: boolean;
  // Did the action trigger a combo?
  combo?: boolean;
  // State of the step
  state: StepState;

  afterBuffTick?: {
    // Amount of progression added to the craft
    addedProgression: number;
    // Amount of quality added to the craft
    addedQuality: number;
    // CP added to the craft (negative if removed)
    cpDifference: number;
    // Solidity added to the craft (negative if removed)
    solidityDifference: number;
  };
}
