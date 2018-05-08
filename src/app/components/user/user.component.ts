import { Component, OnInit } from '@angular/core';
import { DataService } from  '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email:string;
  address:Address;
  hobbies: string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log("Constructor ran...")
   }

  ngOnInit() {
    console.log("ngOnInit ran...")

    this.name = "Bobby Bottleservice";
    this.age = 20;
    this.email = "bobby@bottleservice.org"
    this.address = {
      street: "Fake St",
      city: "Faketon",
      province: "Faketario",
    }
    this.hobbies = ['code', 'eat', 'ride']

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    })
  }
  onClick(){
    console.log('HELLO');
    this.name='Douglas';
    this.hobbies.push('Antiquing')
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false; 
  }
  deleteHobby(hobby){
    console.log(hobby);
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string;
  city:string;
  province:string;
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}