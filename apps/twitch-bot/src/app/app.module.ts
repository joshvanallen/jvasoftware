import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TWITCH_TOKEN } from './twitch-oauth.token';
import { TwitchService } from './twitch.service';
import { JVAContainerComponent } from './container.component';
import { JVAAlertComponent } from './alert.component';
@NgModule({
  declarations: [AppComponent, JVAContainerComponent, JVAAlertComponent],
  imports: [BrowserModule],
  providers: [{
    provide: TWITCH_TOKEN,
    useValue: environment.oauthToken
  }, TwitchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
