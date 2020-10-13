import { Component } from '@angular/core';
import { TwitchService } from './twitch.service';
@Component({
  selector: 'jvasoftware-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  chatLog: any[] = [];
  status: string = '';
  constructor(private twitchService:TwitchService){
    twitchService.streamChatSubject.subscribe({
      next:(args)=>{
        if(args){
          this.chatLog = this.chatLog.concat(args);
        }
      }
    })
  }
}
