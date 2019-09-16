import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'

// components
import { PassengerCountComponent } from './components/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail.component'

@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        PassengerDashboardComponent
    ]
})
export class PassengerDashboardModule{
    
}