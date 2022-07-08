import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'http://localhost:8989/user/findAllUsers';
  private baseUrl1 = 'http://localhost:8989/user/register/delete';
  constructor(private http:HttpClient) { }


  getUserList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }


  findallusers() {
    return this.http.get(`http://localhost:8989/user/findAllUsers`)
  }
  deleteUser( id: any): Observable<any> {

    return this.http.delete(`${this.baseUrl1}/${id}`,{ responseType: 'text' });
  }

  getuser(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateuser(id:any) {

    return this.http.put(`http://localhost:8989/user/update?id=${id}&status=true`,{})
  }
  findByEmail(emailId:any) {
    return this.http.get(`http://localhost:8989/user/findByEmail/${emailId}`)
  
  }

  findByEmailId(email:any) {
    return this.http.get(`http://localhost:8989/details/findByEmail/${email}`)
  
  }

  findalluserdetails() {
    return this.http.get(`http://localhost:8989/details/findAllUserdetails`)
  }
}
