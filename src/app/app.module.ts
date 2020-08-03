import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MatListModule } from '@angular/material/list';
import { ListschComponent } from './listsch/listsch.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

import { DishdetailComponent } from './dishdetail/dishdetail.component';
import {DishServicesService} from './services/dish-services.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
@NgModule({
  declarations: [
    AppComponent,
    ListschComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,FlexLayoutModule,
    MatToolbarModule,MatListModule,MatGridListModule,MatButtonModule, MatCardModule ,MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule, FormsModule ,MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [DishServicesService,PromotionService
  ,LeaderService],
  entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
