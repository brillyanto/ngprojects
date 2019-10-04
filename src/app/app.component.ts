import { Component } from '@angular/core'

interface Nav{
  url:string,
  title: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // router-outlet
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  nav: Nav[] = [
    {
      url: '/',
      title: 'Home',
      exact: true
    },{
      url: '/opps',
      title: '404',
      exact: false
    }
  ];
}
