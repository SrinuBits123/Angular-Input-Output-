import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  //Parent mein Srinu hai... it will go to child
  parenttochild = 'Srinu hero (going to child component)';

  //emitting the data
  incomingFromChild(data: any) {
    alert(data);
  }

  incomingFromChildA() {
    alert('Incoming From Child 2');
  }
}
