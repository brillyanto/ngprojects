import { Component, OnInit } from '@angular/core'
import { PassengerDashboardService } from '../../passenger-dashboard.service'
import { Passenger } from '../../models/passenger.interface'
import { PassengerFormComponent} from '../../components/passenger-form/passenger-form.component'

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-view.component.scss'],
    template: `<div>    
            <passenger-form [detail]="passenger"></passenger-form>
        </div>`
})

export class PassengerViewerComponent implements OnInit{
    private passenger: Passenger;
    constructor(private _passengerService: PassengerDashboardService){}
    ngOnInit(){
        this._passengerService.getPassengerById(1)
        .subscribe(
            (data) => this.passenger = data
        )
    }

}