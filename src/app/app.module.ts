import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeBackgroundColorComponent } from './change-background-color/change-background-color.component';
import { ChooseFavouriteRainbowColorsComponent } from './choose-favourite-rainbow-colors/choose-favourite-rainbow-colors.component';
import { KnowMoreAboutYourNameComponent } from './know-more-about-your-name/know-more-about-your-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeBackgroundColorComponent,
    ChooseFavouriteRainbowColorsComponent,
    KnowMoreAboutYourNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
