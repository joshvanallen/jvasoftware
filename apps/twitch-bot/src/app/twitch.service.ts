import { Injectable, Inject } from '@angular/core';
import comfyJS from 'comfy.js';

import { TWITCH_TOKEN } from './twitch-oauth.token';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class TwitchService{
    public streamChatSubject = new BehaviorSubject<any>(null);
    constructor(@Inject(TWITCH_TOKEN) private twitchOauthToken:string){
        comfyJS.onCommand = (...args) =>{
            console.log('hello world!')
        }
        comfyJS.onChat = (...args) =>{
            this.streamChatSubject.next({user:args[0], message:args[1]});
        }
        comfyJS.Init('jvanallen93');
    }

    init(){

    }
}