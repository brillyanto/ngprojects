import { Passenger } from './models/passenger.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PASSENGERS_API = "http://localhost:3000/passengers";

@Injectable()
export class PassengerDashboardService {
  
    constructor(private http: HttpClient){
    }

    getPassenger(): Observable<Passenger[]>{
      return this.http
      .get<Passenger[]>(PASSENGERS_API)
      .pipe();
    }
}