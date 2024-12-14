import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootScopeData } from 'src/app/rootScope/rootScopeData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  isLoggedIn(){
    if(RootScopeData.userInfo){
      return true;
    }else{
      return false;
    }
  }

  public getUserLogin(form:any){
    let reqData = {
      email:form?.email,
      password:form?.password
    }
    return this.http.post(environment.baseUrl+'/api/auth/login',reqData)
  }

  public registerUsers(reqData:any){
    return this.http.post(environment.baseUrl+'/api/auth/register',reqData)
  }
}
