import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
 
})
export class DocumentsComponent implements OnInit {

  msg:string | any
  selectedFile:File |any;
 
  
  constructor(private router:Router,
    private Http:HttpClient) { }
 
   


  ngOnInit(): void {

   }
   

 
  clickEvent(){
    this.msg='Successfully Submitted!';
    return this.msg;
  }
  
  next() {
    this.router.navigate(['/loan-tracker'])
   
  }

  
}
