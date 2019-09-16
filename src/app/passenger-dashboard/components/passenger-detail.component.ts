import { Component, Input } from '@angular/core';
import { Passenger } from '../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    template: `
    <div>
        <span 
        class="status"
            [ngStyle] = "{'backgroundColor': detail.checkedIn ? 'green' : 'red'}"
        ></span>{{ detail.checkedIn ? (detail.checkedInDate | date: 'MMMM d, y') : 'Not Checked In' }}
        Children: {{ detail.children?.length || 0 }}    
    </div>
    `,
    styleUrls: ['passenger-component.scss']
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
}