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
           /*  public id: number,
            public firstname: string,
            public lastname: string,
            public email: string,
            
            public phone:string,
            public city:string,
            public state:string,
         
      
      
            public accomdationFlag:string,
            public wiilYouVolunteerTospeakFlag:string,
            public localTravelNeedsFlag:string,
          
            public isVegetarianFlag:string,
            public power: string,
      
            public alterEgo?: string,
            public street1?: string,
            public street2?: string,
            public zip?:number,
            public comments?:string */
            



  model = new User(18, '', '','','','','','no','no','no','no',this.powers[0], 'Chuck Overstreet');

 
 
 
 
  onSubmit() { 
    
    this.submitted = true; 
  
   
    this.userService.addUser(this.model)
      .subscribe(user => {
        this.users.push(user);
      }); 
  
  
  }
 
  newUser() {
    //this.model = new User(42, '', '');
  }

}


