import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Passenger } from '../../models/passenger.interface'
import { Baggage } from '../../models/baggage.interface'


@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})

export class PassengerFormComponent implements OnInit {

  @Input()
  detail: Passenger;
  
  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: "none",
    value: "No Baggage"
  },{
    key: "hand-baggage",
    value: "Hand Baggage"
  },{
    key: "hold-baggage",
    value: "Hold Baggage"
  },{
    key: "hand-hold",
    value: "Hand and Hold Baggage"
  }];

  constructor() { }

  ngOnInit() {
  }

  toggleCheckedIn(checkedIn: boolean){
    if(checkedIn){
      this.detail.checkedInDate = Date.now();
    } 
  }

  handleSubmit(passenger: Passenger, passenger_id:number, valid: boolean){

    passenger = Object.assign({"id": passenger_id}, passenger);
    console.log(valid);
    if(valid) this.update.emit(passenger);
  }

}
