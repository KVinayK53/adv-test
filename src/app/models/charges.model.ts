
export interface ICharges {
    type?: string,
    qty?: number,
    unitCost?: number,
    extendedCost?: number,
}

export class Charges implements ICharges{
  constructor(
    public type?: string,
    public qty?: number,
    public unitCost?: number,
    public extendedCost?: number,
  ) {
    this.type = '';
    this.qty = 0;
    this.unitCost = 0;
    this.extendedCost = 0;
  }
}



