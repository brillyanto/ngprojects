import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Passenger } from '../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    template: `
    <div>
        <span *ngIf="editing">
            <input type="text" (keypress.enter)="toggleEdit()" (input)="onNameChange(fullname.value)" #fullname [value]="detail.fullname" />
        </span>
        <h3 *ngIf="!editing">{{detail.fullname}}</h3>
        <span 
        class="status"
            [ngStyle] = "{'backgroundColor': detail.checkedIn ? 'green' : 'red'}"
        ></span>{{ detail.checkedIn ? (detail.checkedInDate | date: 'MMMM d, y') : 'Not Checked In' }}
        <button (click)="toggleEdit()">{{ (!editing) ? 'Edit' : 'Done' }}</button>
        <button (click)="removeMe()">Remove</button>
        <button (click)="viewHandle()">View</button>
    </div>
    `,
    styleUrls: ['passenger-component.scss']
})

export class PassengerDetailComponent implements OnChanges {

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Input()
    detail: Passenger;

    constructor(private cd:ChangeDetectorRef){}

    editing:boolean = false;

    onNameChange(value){
        this.detail.fullname = value;
    }

    ngOnChanges(change: SimpleChanges){
        if(change.detail){
            this.detail = Object.assign({}, change.detail.currentValue);
        }
    }

    toggleEdit(){
        this.editing = !this.editing;
        if(!this.editing) this.edit.emit(this.detail);
    }

    removeMe(){
        this.remove.emit(this.detail);
    }

    viewHandle(){
        this.view.emit(this.detail)
    }

}