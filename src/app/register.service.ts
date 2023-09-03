import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { Student } from "./Student";



@Injectable ({
  providedIn : 'root'
})

export class RegisterService {
    getReportDetailsForReports()
    {
        throw new Error ("Method not implemented !");
    }


constructor(private http:HttpClient) { }

// to add user 
public addUser(user:Student):Observable<string>{
    return this.http.post<string>("http://localhost:8080/demo/registeruser",user)
}

// to validate login user 
public loginUser(user:Student):Observable<string>{
    return this.http.post<string>("http://localhost:8080/demo/loginUser",user)
}


// to regenerate the new password
public forgotPassword(user:Student):Observable<string>{
    return this.http.post<string>("http://localhost:8080/demo/forgotPassword",user)
}


}