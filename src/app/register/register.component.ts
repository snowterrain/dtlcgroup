import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  
  }

  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
 
  model = new User(18, '', '','no','no','no','no',this.powers[0], 'Chuck Overstreet');

 
 
 
 
  onSubmit() { 
    
    this.submitted = false; 
  
   
    this.userService.addUser(this.model)
      .subscribe(user => {
        this.users.push(user);
      }); 
  
  
  }
 
  newUser() {
    //this.model = new User(42, '', '');
  }

}


