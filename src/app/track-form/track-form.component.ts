import {Component, OnInit} from '@angular/core';
import {TrackService} from './track.service';
import {Track} from './track';

@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css']
})
export class TrackFormComponent implements OnInit {

  track = new Track(1, 'Millbrook', 'Millbrook city course race track', 7.4, 'km');

  tracks;

  constructor(private trackService: TrackService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.trackService.addTrack(this.track).subscribe(() => this.loadTracks());
  }

  loadTracks() {
    this.trackService.getTracks()
      .subscribe((tracks: Track[]) => this.tracks = tracks);
  }
}


