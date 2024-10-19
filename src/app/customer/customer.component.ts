import { Component } from '@angular/core';
import { Customer } from '../Entity/Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  cust1: Customer = new Customer(2, "Shailesh", "India", "Pune", 665432312)
  cust2: Customer = new Customer(3, "Sakshi", "India", "Pune", 665432312)
  cust3: Customer = new Customer(4, "Rachana", "India", "Pune", 665432312)
  cust4: Customer = new Customer(5, "Utkarsha", "India", "Pune", 665432312)
  cust5: Customer = new Customer(6, "Pooja", "India", "Pune", 665432312)
  cust6: Customer = new Customer(8, "Vishal", "India", "Pune", 665432312)
  cust7: Customer = new Customer(1, "Poonam", "India", "Pune", 665432312)
  cust8: Customer = new Customer(7, "Dipti", "India", "Pune", 665432312)
  cust9: Customer = new Customer(9, "Tanaya", "India", "Pune", 8520852085)

  custArr: Customer[] = [this.cust1, this.cust2, this.cust3, this.cust4, this.cust5, this.cust6, this.cust7, this.cust8, this.cust9]

  addRecord(){
    this.custArr.push(new Customer(9, "Tanaya", "India", "Pune", 8520852085))
  }

  removeRecord(){
    this.custArr.pop();
  }

}

