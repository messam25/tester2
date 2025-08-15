import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { ServicesComponent } from './pages/services/services.component';
import { shopComponent } from './pages/marketplace/marketplace.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FooterComponent } from './component/footer/footer.component';
import { CallComponent } from './pages/call/call.component';
import { SigninComponent } from './pages/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ServicesComponent,
    shopComponent,
    ProfileComponent,
    AboutusComponent,
    FooterComponent,
    CallComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
