import { Component, Input } from '@angular/core';
import { Passenger } from '../models/passenger.interface';
@Component({
    selector: 'passenger-count',
    template: `
    <div>
        <h3>Airline Passengers</h3>
        <div>
            Total Passengers {{ items.length }} : CheckedIn {{ checkedInCount }}
        </div>
    </div>
    `
})

export class PassengerCountComponent {

 @Input()
 items: Passenger;
 checkedInCount(): number{
    console.log(this.items);
    if(!this.items) return;
    //return this.items.filter((passenger: Passenger) => passenger.checkedIn ).length;
    return 0;
 }
}