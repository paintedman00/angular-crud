import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  profile = [];
  constructor() { }

  addToProfile(obj:object) {
    console.log(obj);
    this.profile = JSON.parse(localStorage.getItem('profile')) || [];
    this.profile.push(obj);
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }
  
  deleteItem(index){
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.profile.splice(index,1);
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }

  editItem(index, obj){
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.profile[index] = obj;
    localStorage.setItem('profile', JSON.stringify(this.profile));
  }
 
}
