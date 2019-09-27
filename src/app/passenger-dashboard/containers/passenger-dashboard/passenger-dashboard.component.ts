import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],   
    template: `
    <div>
        <passenger-count 
        [items] = "passengers" 
        ></passenger-count>
        <ul>
          <li *ngFor="let passenger of passengers">{{passenger.fullname}}</li>
        </ul>
        <passenger-detail
        *ngFor="let passenger of passengers" 
        [detail]="passenger" 
        (edit)="handleEdit($event)" 
        (remove)="removeItem($event)"></passenger-detail>
    </div>
    `
})

export class PassengerDashboardComponent implements OnInit{
    passengers : Passenger[];
    constructor(private _passengerService: PassengerDashboardService){

    }

    ngOnInit(){
      this._passengerService.getPassenger()
      .subscribe( (data: Passenger[]) => { return this.passengers = data; } ,
      error => console.log(error));
    }

    removeItem(item: Passenger){
      this._passengerService.removePassenger(item)
      .subscribe((data:Passenger) => {
        this.passengers = this.passengers.filter( (passenger) => passenger.id != item.id );
      } );
    }

    handleEdit(item: Passenger){

      this._passengerService.updatePassenger(item)
      .subscribe( (data: Passenger) => {
        this.passengers.map( (passenger) => { 
          if(item.id == passenger.id) Object.assign(passenger, item);
        } );
      })
      
    }

}