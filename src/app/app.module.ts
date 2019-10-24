import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppHeaderComponent} from './header/header.component';
import {AppFinishComponent} from './finish/finish.component';
import {AppGameComponent} from './game/game.component';
import {AppShareComponent} from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFinishComponent,
    AppGameComponent,
    AppShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
