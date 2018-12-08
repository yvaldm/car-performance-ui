import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Track} from './track';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly tracksUrl: string;

  constructor(private http: HttpClient) {
    this.tracksUrl = 'http://car-performance-service.herokuapp.com/tracks';
  }

  addTrack(track: Track): Observable<Track> {
    return this.http.post<Track>(this.tracksUrl, track, httpOptions);
  }

  getTracks() {
    return this.http.get(this.tracksUrl);
  }
}
