import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  public sendMessage(selectedUser:any,req:any){
    return this.http.post(environment.baseUrl+'/api/chat/send/'+selectedUser?._id,req);
  }

  public getAllMessagesList(selectedUser:any,req:any){
    return this.http.post(environment.baseUrl+'/api/chat/'+selectedUser?._id,req);
  }

}
