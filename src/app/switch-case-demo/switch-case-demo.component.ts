import { Component } from '@angular/core';
import { Player } from '../Entity/Player';

@Component({
  selector: 'app-switch-case-demo',
  templateUrl: './switch-case-demo.component.html',
  styleUrl: './switch-case-demo.component.css'
})
export class SwitchCaseDemoComponent {






  dynamicCss: string = "ind"

  changeCss(){
    
    if(this.dynamicCss === "ind"){
      this.dynamicCss = "aus"
    }else{
      this.dynamicCss = "ind"
    }

  }











  listOfPlayer: Player[] = [

    { "playerId": 7, "playerName": "MSD", "lastIplContract": 12, "playerCountry": "India", "sportName": "Cricket" },
    { "playerId": 10, "playerName": "Sachin Tendulkar", "lastIplContract": 8.2, "playerCountry": "India", "sportName": "Cricket" },
    { "playerId": 18, "playerName": "Virat Kohli", "lastIplContract": 15, "playerCountry": "India", "sportName": "Cricket" },
    { "playerId": 99, "playerName": "Malinga", "lastIplContract": 12, "playerCountry": "Sri Lanka", "sportName": "Cricket" },
    { "playerId": 3, "playerName": "Camron Green", "lastIplContract": 17, "playerCountry": "Australia", "sportName": "Cricket" },
    { "playerId": 31, "playerName": "David Warner", "lastIplContract": 6.25, "playerCountry": "Australia", "sportName": "Cricket" },
    { "playerId": 49, "playerName": "Wanidu", "lastIplContract": 12, "playerCountry": "Sri Lanka", "sportName": "Cricket" },
    { "playerId": 32, "playerName": "Maxwell", "lastIplContract": 10, "playerCountry": "Australia", "sportName": "Cricket" },
    { "playerId": 10, "playerName": "Shahid Afridi", "lastIplContract": 0, "playerCountry": "Pakistan", "sportName": "Cricket" },
    { "playerId": 29, "playerName": "Nicolas", "lastIplContract": 16, "playerCountry": "West Indies", "sportName": "Cricket" },
  ]

}
