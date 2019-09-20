import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

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
    passengers: Passenger[];
    ngOnInit(){
      this.passengers =  [
        {
          id: 0,
          fullname: 'John',
          checkedIn: false,
          checkedInDate: null,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Female', age: 2 },
          ]
        },
        {
          id: 1,
          fullname: 'Tom',
          checkedIn: true,
          checkedInDate: 1490742000000,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
          ]
        },
        {
          id: 2,
          fullname: 'Pradeep',
          checkedIn: false,
          checkedInDate: 1491606000000,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
          ]
        },
        {
          id: 3,
          fullname: 'Suman',
          checkedIn: true,
          checkedInDate: 14884128000000,
          children: null
        },
        {
          id: 4,
          fullname: 'Sathish',
          checkedIn: false,
          checkedInDate: null,
          children: null
        },
        {
          id: 5,
          fullname: 'Mike',
          checkedIn: false,
          checkedInDate: 1491606000000,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
          ]
        },
        {
          id: 6,
          fullname: 'Dick',
          checkedIn: false,
          checkedInDate: 14884128000000,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
          ]
        },
      ];
    }

    removeItem(item){
      this.passengers = this.passengers.filter( (passenger) => passenger.id != item.id );
    }

    handleEdit(item){
      
      this.passengers.map( (passenger) => { 
        if(item.id == passenger.id) Object.assign(passenger, item);
      } );
    }

}