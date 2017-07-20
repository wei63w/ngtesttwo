import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule ,Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AnimatoneComponent } from './main/animatone/animatone.component';
import { UsejqueryComponent } from './main/usejquery/usejquery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AnimatoneComponent,
    UsejqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
