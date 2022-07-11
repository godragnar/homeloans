import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

 users:any;
  loanAmount: any;
 

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
 userDocuments(id: number){
    this.router.navigate(['', id]);
  }

  deleteuser(id: any) {
    this.userservice.deleteuser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateuser(id:any){
    this.userservice.updateuser(id).subscribe(r=>{
      
    });
    this.users = [];
    
    this.userservice.findallusers().subscribe(res=>{
      debugger
      this.users= res;
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

