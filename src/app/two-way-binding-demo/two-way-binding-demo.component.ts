import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-demo',
  templateUrl: './two-way-binding-demo.component.html',
  styleUrl: './two-way-binding-demo.component.css'
})
export class TwoWayBindingDemoComponent {

  data:string = "Some Name"
  greetings:string = "Greetings User"

  showImage(){
    this.greetings = this.data+".jpg";
  }
  
}
