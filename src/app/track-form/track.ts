import {Value} from '../value';
import {Car} from '../car-form/car';

export class Track {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public length: Value,
    public cars: Car[]
  ) {
  }

}
