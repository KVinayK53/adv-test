export interface IEquipment {
  item?: number,
  description?: string,
  classification?: string,
  qty?: number
}

export class Equipment implements IEquipment {
  constructor(
    public item?: number,
    public description?: string,
    public classification?: string,
    public qty?: number
  ) {
    this.item = 0;
    this.description = '';
    this.classification = '';
    this.qty = 0;
  }
}

