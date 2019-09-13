import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
        <h3>Airline Passengers</h3>
        <ul>
            <li *ngFor="let passenger of passengers; let i=index">
            <span 
            class="status"
                [ngStyle] = "{'backgroundColor': passenger.checkedIn ? 'green' : 'red'}"
            ></span>{{ passenger.checkedIn ? (passenger.checkedInDate | date: 'MMMM d, y') : 'Not Checked In' }}
            Children: {{ passenger.children?.length || 0 }}
            </li>
        </ul>
    </div>
    `
})

export class PassengerDashboardComponent{
    passengers: Passenger[] = [
        {
          id: 0,
          fullname: 'John',
          checkedIn: false,
          checkedInDate: null,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
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
          id: 6,
          fullname: 'Mike',
          checkedIn: false,
          checkedInDate: 1491606000000,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
          ]
        },
        {
          id: 7,
          fullname: 'Dick',
          checkedIn: false,
          checkedInDate: 14884128000000,
          children: [
            { name: 'child1', gender: 'Male', age: 4 },
            { name: 'child2', gender: 'Fale', age: 2 },
          ]
        },
      ]
}