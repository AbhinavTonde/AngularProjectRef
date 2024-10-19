import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  rollNo:number = 4420
  studName:string = "DiPtI MoKaShI"
  studDob:Date = new Date(2003, 0, 8);
  feesPaid:number = 42000
  discountGained:number = 20/100
  favPerson:any = { "personName":"Jyoti", "addr":"Bhivadi", "age":40 }
  variable:string = "anahcar"

}
