import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './car';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carsUrl;

  constructor(private http: HttpClient) {
    this.carsUrl = 'https://car-performance-service.herokuapp.com/cars';
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, httpOptions);
  }
}
