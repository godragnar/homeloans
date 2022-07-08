import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AdminServiceService } from '../admin-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

 
  loanAmount: any;
  users:Observable<User[]> | any;

  constructor(
    private router:Router,
    private userservice:UserServiceService,
    private userloginService:AuthenticationService
    ) { }

  ngOnInit(): void {
    this.reloadData();
    this.loan();
  }

  reloadData() {
    this.users = [];
    
    this.userservice.findallusers().subscribe(res=>{
      debugger
      this.users= res;
    });
   

    
 
    
  }
  loan(){

    this.loanAmount=[];

    this.userservice.findalluserdetails().subscribe(res=>{
      debugger
      this.loanAmount=res;
    });
  }
 
 
  adminLogout() {

    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
}
function editUser(id: any, string: any) {
  throw new Error('Function not implemented.');
}

