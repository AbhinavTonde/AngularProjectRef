import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-syntaxes',
  templateUrl: './data-binding-syntaxes.component.html',
  styleUrl: './data-binding-syntaxes.component.css'
})
export class DataBindingSyntaxesComponent {

  userName:string = "Rachana Gaikwad-Kadam";

  imgPath:string = "Wallpaper1.jpg";

  changeImage(){
    this.imgPath = "Wallpaper5.jpg"
  }

  handleClick(){
    if(this.imgPath == "Wallpaper1.jpg"){
      this.imgPath = "Wallpaper2.jpg"
    }else{
      this.imgPath = "Wallpaper1.jpg"
    }
    
  }

  changeImgAgain(){
    this.imgPath = "Wallpaper1.jpg"
  }

  changeName(){
    this.userName = "Ms. Dipti Mokashi"
    this.imgPath = "Wallpaper4.jpg"
  }

}
