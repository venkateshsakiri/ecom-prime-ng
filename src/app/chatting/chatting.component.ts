import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { RootScopeData } from "../rootScope/rootScopeData";
import { ChatService } from "../services/chat.service";

@Component({
    selector: "app-chatting",
    templateUrl: "./chatting.component.html",
    styleUrls: ["./chatting.component.scss"],
})
export class ChattingComponent implements OnInit {
    usersList: any;
    userInfo: any;
    selectedUser: any;
    message:any;
    messageList:any = [];

    constructor(public authUsers: AuthService,public chatService:ChatService) {}

    ngOnInit(): void {
        this.userInfo = RootScopeData.userInfo?.user;
        this.getAllUsers();
    }

    public getAllUsers() {
        this.authUsers.getAllUsers().subscribe(
            (res: any) => {
                this.usersList = res?.data.filter(
                    (item: any) =>
                        !(item?._id === RootScopeData.userInfo?.user?.id)
                );
                // this.usersList = res?.data;
            },
            () => {}
        );
    }
    getImageSrc(base64String: string): string {
        if (!base64String) {
            return "path/to/default/image.jpg"; // Default image if none provided
        }

        if (!base64String.startsWith("data:image")) {
            return "data:image/jpeg;base64," + base64String;
        }

        return base64String;
    }

  public selectedUsers(user:any){
    this.selectedUser = user;
    this.getAllMessages();
  }

  public sendMessages(){
    this.chatService.sendMessage(this.selectedUser,{text:this.message,image:'',senderId:this.userInfo?.id}).subscribe((res:any)=>{
      console.log(res)
      this.message = '';
      let message = res?.data
      this.messageList = [...this.messageList,message];
      console.log(this.messageList)
    },()=>{

    })
  }

  public getAllMessages(){
    this.chatService.getAllMessagesList(this.selectedUser,{currentUser:this.userInfo?.id}).subscribe((res:any)=>{
      console.log(res)
      this.messageList = res?.data;
    },()=>{

    })
  }
}
