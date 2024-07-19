export enum SimulationFailCause {
  // Only used for safe mode, this is for when safe mode is enabled and action success rate is <100 at this moment.
  UNSAFE_ACTION,
  INTEGRITY_REACHED_ZERO,
  NOT_ENOUGH_GP,
  MISSING_LEVEL_REQUIREMENT,
  MISSING_STATS_REQUIREMENT,
}
