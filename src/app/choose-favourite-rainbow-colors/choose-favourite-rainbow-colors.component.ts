import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-favourite-rainbow-colors',
  templateUrl: './choose-favourite-rainbow-colors.component.html',
  styleUrls: ['./choose-favourite-rainbow-colors.component.css']
})
export class ChooseFavouriteRainbowColorsComponent implements OnInit {
  title = 'angular-checkbox-list-demo';
  constructor() {
    
   }

  ngOnInit() {
    this.fetchSelectedItems()
  }
  selectedItemsList = [];
  checkedIDs = [];
  checkedColors = [];
  checkboxesDataList= [
    {
      id: 'red',
      label: 'Red',
      isChecked: false
    },
    {
      id: 'orange',
      label: 'Orange',
      isChecked: false
    },
    {
      id: 'yellow',
      label: 'Yellow',
      isChecked: false
    },
    {
      id: 'green',
      label: 'Green',
      isChecked: false
    },
    {
      id: 'blue',
      label: 'Blue',
      isChecked: false
    },
    {
      id: 'indigo',
      label: 'Indigo',
      isChecked: false
    },
    {
      id: 'violet',
      label: 'Violet',
      isChecked: false
    },  
  ]
  changeSelection() {
    this.fetchSelectedItems()
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }
  
  getSelectedColors() {
    var colorDetails = (document.getElementById("listOfSelectedColors") as HTMLInputElement);
    colorDetails.innerHTML = "";
    var colorListDetails = "";
    if(this.selectedItemsList.length <= 0)
    {
      colorDetails.innerHTML = "Please select at least one color.";
      colorDetails.style.color = "Red";
      return false;
    }
    if(this.selectedItemsList.length == 1)
    {
      colorListDetails = "Your favourite color is ";
      
    }
    else{
      colorListDetails = "Your favourite colors are ";
    }
    for(var c=0;c<this.selectedItemsList.length;c++){
      var selectedColor = this.selectedItemsList[c].label;
      if((this.selectedItemsList.length-1) == c){
        if(this.selectedItemsList.length==1)
        {
          colorListDetails = colorListDetails+selectedColor;
        }
        else{
          const result = colorListDetails.slice(0, -1);
      colorListDetails = result+" and "+selectedColor;
        }
      }
      else
      {
        colorListDetails = colorListDetails+selectedColor+",";
      }
    }
    colorDetails.innerHTML = colorListDetails;
    colorDetails.style.color = "Black";
  }
}
