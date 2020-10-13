import { Component } from '@angular/core';
import { AlertConfiguration } from './alert.component';
@Component({
  selector: 'jva-container',
  template: `
    <div class="container">
        <jva-alert [alertConfiguration]="alertConfiguration"></jva-alert>
    </div>
  `,
  styles:[`
    .container{
        width:1920px;
        height: 1080px;
        background-color: #e3e3e3
    }
  `]
})
export class JVAContainerComponent{
    public alertConfiguration: AlertConfiguration = {
        position:{
            x:123,
            y:123
        },
        duration: 6000,
        height: 500,
        width: 500,
        imageUrl: 'https://media1.tenor.com/images/4a08cf775bdf1a7a96c161cd64e21d88/tenor.gif',
        text: 'Thanks for subscribing'
    }
    constructor(){}
}