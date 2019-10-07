import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Router} from '@angular/router'

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-view/passenger-view.component'

// components
import { PassengerCountComponent } from './components/passenger-count.component'
import { PassengerDetailComponent } from './components/passenger-detail.component'
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component'

// service
import { PassengerDashboardService } from './passenger-dashboard.service'

const routes = [
    { 
        path: 'passengers', 
        children:[
            {
                path:'',
                component: PassengerDashboardComponent
            },
            {
                path:':id',
                component: PassengerViewerComponent
            },
        ]
    }
]

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
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    providers:[
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule{
    
}