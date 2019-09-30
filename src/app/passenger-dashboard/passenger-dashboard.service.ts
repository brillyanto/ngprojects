import { Passenger } from './models/passenger.interface';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const PASSENGERS_API = "http://localhost:3000/passengers";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient){
    }
    getPassenger(): Observable<Passenger[]>{
      return this.http
      .get<Passenger[]>(PASSENGERS_API);
    }

    getPassengerById(id:number):Observable<Passenger>{
      return this.http
      .get<Passenger>(`${PASSENGERS_API}/${id}`);
    }


    updatePassenger(passenger: Passenger): Observable<Passenger>{
      return this.http
      .put<Passenger>(`${PASSENGERS_API}/${passenger.id}`, passenger, httpOptions);
    }

    removePassenger(passenger: Passenger):Observable<Passenger>{
      return this.http
      .delete<Passenger>(`${PASSENGERS_API}/${passenger.id}`);
    }

}
