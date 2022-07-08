import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-loan-tracker',
  templateUrl: './loan-tracker.component.html',
  styleUrls: ['./loan-tracker.component.css']
})
export class LoanTrackerComponent implements OnInit {
  public user:any = null;
  public message:any = '';
  public email: any = null;
  constructor(private router:Router,
    private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  track() {
    this.userService.findByEmail(this.email).subscribe(re=>{
      this.user = re;
      debugger
      if(this.user==null || this.user == undefined) {
        this.message = 'User Not Found (or) Deleted with Given Email.';
      } else if(this.user?.accept) {
        this.message = 'Request is Accepted. Wait for Loan amount to Credit.';
      } else if(!this.user?.accept) {
        this.message = 'Request is Processing . Wait for Acceptance.';
      }
    })
  }

}
