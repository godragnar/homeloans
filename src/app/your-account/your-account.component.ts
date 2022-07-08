import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-account',
  templateUrl: './your-account.component.html',
  styleUrls: ['./your-account.component.css']
})
export class YourAccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
