import {Direction, IDirection} from "./directions.model";
import {Equipment, IEquipment} from "./equipment.model";
import {Exclusion, IExclusion} from "./exclusions.model";
import {Charges, ICharges} from "./charges.model";

export interface IActionAttributeData {
    charges?: ICharges[];
    directions?: IDirection;
    equipments?: IEquipment[];
    exclusions?: IExclusion[];
}
export class ActionAttributeData implements IActionAttributeData {
    constructor(
        public charges?: ICharges[],
        public directions?: IDirection,
        public equipments?: IEquipment[],
        public exclusions?: IExclusion[],
    ) {
        this.charges = [];
        this.equipments = [];
        this.exclusions = [];
        this.directions = new Direction();
        this.charges.push(new Charges());
        this.equipments.push(new Equipment());
        this.exclusions.push(new Exclusion());
    }
}
