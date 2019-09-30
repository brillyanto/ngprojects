import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-view/passenger-view.component'
// components
import { PassengerCountComponent } from './components/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail.component'
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component'

// service
import { PassengerDashboardService } from './passenger-dashboard.service';


@NgModule({
    declarations:[
        PassengerDashboardComponent,
        PassengerViewerComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports:[
        PassengerViewerComponent
    ],
    providers:[
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule{
    
}