import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-srinu-child',
  templateUrl: './srinu-child.component.html',
  styleUrls: ['./srinu-child.component.css'],
})
export class SrinuChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //from Parent to child
  @Input('datafromParent') fromParent: String;

  //from child to parent
  //passing an event and triggers to parent
  //click on button... 1st alert is emitting (Incoming From Child).... 2nd alert is (Sending Data to parent)... best... check thoroughly
  @Output() sendDataToParent = new EventEmitter();

  @Output() sendDataToParentA = new EventEmitter();
// Best... check thoroughly
  callToParentFunction() {
    this.sendDataToParent.emit('Sending Data to parent emit 1');

    this.sendDataToParentA.emit();

    alert('Sending Data to parent 3');
  }
}
