export interface IDirection {
    action?: string,
    name?: string,
    sequence?: number,
    memo?: string
}

export class Direction implements IDirection{
  constructor(
      public action?: string,
      public name?: string,
      public sequence?: number,
      public memo?: string
  ) {
    this.action = '';
    this.name = '';
    this.sequence = 0;
    this.memo = '';
  }
}
