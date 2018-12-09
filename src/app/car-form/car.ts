import {Value} from '../value';

export class Car {
  constructor(
    public id: number,
    public track_id: number,
    public code: string,
    public transmission: string,
    public ai: string,
    public max_speed: Value
  ) {
  }

}
