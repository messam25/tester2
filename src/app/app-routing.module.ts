import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { ServicesComponent } from './pages/services/services.component';
import { shopComponent } from './pages/marketplace/marketplace.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FooterComponent } from './component/footer/footer.component';
import { CallComponent } from './pages/call/call.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'shop', component: shopComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'call', component: CallComponent },
   { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
