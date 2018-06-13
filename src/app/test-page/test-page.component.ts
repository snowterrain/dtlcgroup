import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  members: Member[];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitted = false;

 /*  public id: number,
  public firstname: string,
  public lastname: string,
  public email: string,
  
  public phone:string,
  public city:string,
  public state:string,


  public street1?: string,
  public street2?: string,
  public zip?:string,
  public comments?:string
 */
  model = new Member(18, '', '','','','','','','','','');

 
 
 
 
  onSubmit() { 
    
    this.submitted = true; 
  
   
    this.userService.addMember(this.model)
      .subscribe(user => {
        this.members.push(user);
      }); 
  
  
  }

}
