import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomedetailComponent } from './home/homedetail/homedetail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HomedetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
