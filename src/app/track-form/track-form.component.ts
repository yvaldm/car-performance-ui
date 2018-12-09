import {Component, OnInit} from '@angular/core';
import {TrackService} from './track.service';
import {Track} from './track';
import {Value} from '../value';

@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})
export class TrackFormComponent implements OnInit {

  track = new Track(1, 'Millbrook', 'Millbrook city course race track', new Value(7.4, 'km'), null);

  tracks;

  constructor(private trackService: TrackService) {
  }

  ngOnInit() {
  }

  saveTrack() {
    this.trackService.addTrack(this.track).subscribe(() => this.loadTracks());
  }

  loadTracks() {
    this.trackService.getTracks()
      .subscribe((tracks: Track[]) => this.tracks = tracks);
  }
}


