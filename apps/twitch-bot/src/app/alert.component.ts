import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';
  import { Component, Input } from "@angular/core";

export interface AlertConfiguration {
    position:{
        x: number;
        y: number;
    },
    imageUrl?: string;
    text?: string;
    duration:number;
    height:number;
    width:number;
}


@Component({
    selector: 'jva-alert',
    template:`
        <div class="floating-container">
            <div *ngIf="alertConfiguration.imageUrl" style="height:100%;" [ngStyle]="{'background':'url('+alertConfiguration.imageUrl+') no-repeat'}">
                <!-- <img [src]="alertConfiguration.imageUrl" /> -->
            </div>
            <div *ngIf="alertConfiguration.text">
                <caption style="width: 100%;">{{alertConfiguration.text}}</caption>
            </div>
        </div>
    `,
    styles:[`
        .floating-container{
            width: 500px;
            height: 500px;
            top: 60px;
            left: 710px;
            position: absolute;
        }
    `],
    animations: [
        trigger('popOverState', [
          state('show', style({
            opacity: 1
          })),
          state('hide',   style({
            opacity: 0
          })),
          transition('show => hide', animate('600ms ease-out')),
          transition('hide => show', animate('1000ms ease-in'))
        ])
      ]
})
export class JVAAlertComponent {
    @Input() alertConfiguration: AlertConfiguration;
}