import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-image',
  templateUrl: './dynamic-image.component.html',
  styleUrl: './dynamic-image.component.css'
})
export class DynamicImageComponent {

  imgPath:string = "Wallpaper3.avif"

  image:string = "";

  showImage(){
    this.imgPath = `${this.image}.jpg`
  }

}
