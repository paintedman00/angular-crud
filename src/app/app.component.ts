import { DataService } from './data.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profile = JSON.parse(localStorage.getItem('profile'));
  index:Number;
  constructor(private data:DataService) {}
  
  
  registeration(form:NgForm) {
    // console.log(form.value);
    this.data.addToProfile(form.value);
    this.profile = JSON.parse(localStorage.getItem('profile'));
    form.reset();
  }
 
  deleteUser(index){
    this.data.deleteItem(index);
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }
  
  update(form){
    this.data.editItem(this.index, form.value);
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

  modify(indexModify){
    this.index = indexModify;
  }

}
