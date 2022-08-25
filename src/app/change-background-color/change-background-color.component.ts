import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-change-background-color',
  templateUrl: './change-background-color.component.html',
  styleUrls: ['./change-background-color.component.css']
})
export class ChangeBackgroundColorComponent implements OnInit {

  constructor() 
  {
  }

  ngOnInit() {
  }

  colorName:string;
  onKeyUpCheck()
  {
    var errorDetails = (document.getElementById("errorDetails") as HTMLInputElement);
    errorDetails.innerHTML = "";
  }  
  changeColor() {
    var enterColor = (document.getElementById("inputText") as HTMLInputElement).value;
    var errorDetails = (document.getElementById("errorDetails") as HTMLInputElement);
    var mainComponent1 = (document.getElementById("mainComponent1") as HTMLInputElement);
    
    if((enterColor == null) || (enterColor == ""))
    {
      document.getElementById("inputText").style.borderBlockColor = "Red";
      mainComponent1.style.backgroundColor = "white";
      errorDetails.innerHTML = "Please provide a color name.";
      errorDetails.style.color = "Red";     
    }
    else
    {
      errorDetails.innerHTML = "";
      var res=this.isColor(enterColor);
      if(res)
      {
        document.getElementById("inputText").style.borderBlockColor = "Black";
        mainComponent1.style.backgroundColor = enterColor;
      }
      else
      {
        document.getElementById("inputText").style.borderBlockColor = "Red";
        mainComponent1.style.backgroundColor = "white";
        errorDetails.innerHTML = "The given input is not a valid color name.";
        errorDetails.style.color = "Red";

      }
    }

  }
  isColor(strColor:string){
    var s = new Option().style;
    s.color = strColor;
    return s.color.toUpperCase() == strColor.toUpperCase();
  }
}


