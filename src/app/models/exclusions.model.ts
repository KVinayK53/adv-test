export interface IExclusion {
  epn?: string,
  desc?: string,
  cost?: number,
  notes?: string
}

export class Exclusion implements IExclusion {
  constructor(
    public epn?: string,
    public desc?: string,
    public cost?: number,
    public notes?: string,
  ) {
    this.epn = '';
    this.desc = '';
    this.cost = 0;
    this.notes = '';
  }
}

