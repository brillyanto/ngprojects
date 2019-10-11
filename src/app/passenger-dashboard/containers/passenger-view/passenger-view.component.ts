import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { PassengerDashboardService } from '../../passenger-dashboard.service'
import { Passenger } from '../../models/passenger.interface'
import { PassengerFormComponent} from '../../components/passenger-form/passenger-form.component'

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['./passenger-view.component.scss'],
    template: 
    `<div>    
        <passenger-form 
            [detail]="passenger" 
            (update)="updateDetail($event)">
        </passenger-form>
    </div>`
})

export class PassengerViewerComponent implements OnInit{
    private passenger: Passenger;
    constructor( private route: ActivatedRoute, 
        private router: Router, 
        private _passengerService: PassengerDashboardService
    ){}
    ngOnInit(){
        
        // this.route.params
        // .subscribe((data:Params) => console.log(data) );

        this.route.params.pipe(
            switchMap( (data:Passenger) => this._passengerService.getPassengerById(data.id) )
        ).subscribe(
            (data) => this.passenger = data
        )

        // this._passengerService.getPassengerById(1)
        // .subscribe(
        //     (data) => this.passenger = data
        // )
    }

    updateDetail(p: Passenger){
        console.log(p);
        this._passengerService.updatePassenger(p)
        .subscribe(
            (data) => this.passenger = Object.assign({}, p, data)
        )
    }
}