import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import home components
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { HomedetailComponent } from './home/homedetail/homedetail.component';
const appRoutes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'header', component: HeaderComponent },
 { path: 'footer', component: FooterComponent },
 { path: 'homedetail', component: HomedetailComponent },
 
// redirect to home page on load
 { path: '', component: HomeComponent, pathMatch: 'full'}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);