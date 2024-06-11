export class GathererStats {
  constructor(
    public readonly jobId: number,
    public gathering: number,
    public perception: number,
    public initialGP: number,
    public readonly level: number
  ) {}
}
