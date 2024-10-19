import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  handleSubmit(registrationForm:NgForm){
    alert("Submit button clicked... Hurray...!")
    console.log(registrationForm.value);
    registrationForm.reset();
  }

}
