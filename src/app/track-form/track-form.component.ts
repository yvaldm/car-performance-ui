import {Component, OnInit} from '@angular/core';
import {Track} from './track';
import {TrackService} from './track.service';

@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})
export class TrackFormComponent implements OnInit {

  track = new Track(666, 'some track', 'some track description', 222.22, 'km');

  submitted = false;

  constructor(private trackService: TrackService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.trackService.addTrack(this.track).subscribe();
  }
}


