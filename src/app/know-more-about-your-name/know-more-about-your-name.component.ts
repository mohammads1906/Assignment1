import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-know-more-about-your-name',
  templateUrl: './know-more-about-your-name.component.html',
  styleUrls: ['./know-more-about-your-name.component.css']
})
export class KnowMoreAboutYourNameComponent implements OnInit {

  constructor() {
    
   }
  ngOnInit() {
    
  }
  name:string;
  nameRepeatedDetails:any;
  nameNonRepeated:any;

  knowNameDetails()
  {
     this.name = (document.getElementById("nameInput") as HTMLInputElement).value;
    var nameLengthDetails = (document.getElementById("nameLengthDetails") as HTMLInputElement);
    var nameAscOrderDetails = (document.getElementById("nameAscOrderDetails") as HTMLInputElement);
    var nameReverseOrderDetails = (document.getElementById("nameReverseOrderDetails") as HTMLInputElement);
    var nameVowelsDetails = (document.getElementById("nameVowelsDetails") as HTMLInputElement);
    var nameConsonentsDetails = (document.getElementById("nameConsonentsDetails") as HTMLInputElement);
    this.nameRepeatedDetails = (document.getElementById("nameRepeatedDetails") as HTMLInputElement);
    this.nameNonRepeated = (document.getElementById("nameNonRepeatedDetails") as HTMLInputElement);

    var nameLength = this.name.length.toString();
    nameLengthDetails.innerHTML = nameLength;
    nameLengthDetails.style.color = "Green";
    if(this.name.length>0){
    var sorted = (this.name.toLowerCase()).split('').sort().join('');
    var sortedReverse = (this.name.toLowerCase()).split('').sort().reverse().join('');
    var vowels = (this.name.toLowerCase()).match(/[aeiou]/ig).join(",");
    var consonants = (this.name.toLowerCase()).match(/[^aeiou]/ig).join(",");
    var nameRepeatedLetters= this.getRepeatedChars((this.name.toLowerCase()));
    var nameNonRepeatedLetters= this.getNonRepeatedChars((this.name.toLowerCase()));

    nameAscOrderDetails.innerHTML = sorted;
    nameAscOrderDetails.style.color = "Green";

    nameReverseOrderDetails.innerHTML = sortedReverse;
    nameReverseOrderDetails.style.color = "Green";

    nameVowelsDetails.innerHTML = vowels;
    nameVowelsDetails.style.color = "Green";

    nameConsonentsDetails.innerHTML = consonants;
    nameConsonentsDetails.style.color = "Green";

    this.nameNonRepeated.innerHTML = nameNonRepeatedLetters;
    this.nameNonRepeated.style.color = "Green";

    this.nameRepeatedDetails.innerHTML = nameRepeatedLetters;
    this.nameRepeatedDetails.style.color = "Green";
  }
  else{
    nameAscOrderDetails.innerHTML = "";
    nameReverseOrderDetails.innerHTML = "";
    nameVowelsDetails.innerHTML = "";
  }
  }
  getRepeatedChars(name:string){
    const arr = name.split('');
    const hash = new Map();
    const result = [];
    // If repeat the value is false, if no repeat the value is true
    for (let i = 0; i < arr.length; i++) {
      if (hash.get(arr[i]) === undefined) {
        hash.set(arr[i], true);
      } else {
        const value = hash.get(arr[i]);
        if (value) {
          hash.set(arr[i], !value);
        }
      }
    }
    hash.forEach((v, k) => {
      if (!v)
        result.push(k);
    });
    return result;
};
getNonRepeatedChars(name:string){
  const arr = name.split('');
  const hash = new Map();
  const result = [];
  // If repeat the value is false, if no repeat the value is true
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k) => {
    if (v)
      result.push(k);
  });
  return result;
};
}
