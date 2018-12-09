import {Component, OnInit} from '@angular/core';
import {Car} from './car';
import {TrackService} from '../track-form/track.service';
import {Track} from '../track-form/track';
import {CarService} from './car.service';
import {Value} from '../value';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  car = new Car(1, 1, 'rdb1', 'automatic', 'enabled',
    new Value(110.12121212, 'mps'));

  transmission = ['automatic', 'manual'];
  ai = ['enabled', 'disabled'];

  tracks;
  cars;

  constructor(private trackService: TrackService,
              private carService: CarService) {
    this.loadTracks();
  }

  ngOnInit() {
  }

  loadTracks() {
    this.trackService.getTracks()
      .subscribe((tracks: Track[]) => this.tracks = tracks);
  }

  saveCar() {
    this.carService.addCar(this.car).subscribe(() => {
    });
  }
}
