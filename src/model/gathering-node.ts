import { Item } from './item';

export interface GatheringNode {
  nodeLvl: number;
  jobRequired: number;
  integrity: number;
  locationEffect?: boolean;
  gatherableItems: Item[];
}
