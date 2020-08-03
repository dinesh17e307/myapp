import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListschComponent } from './listsch/listsch.component';
import { ContactComponent } from './contact/contact.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: ListschComponent },
  {path:'about',component:AboutComponent},
  {path:'dishdetail/:id',component:DishdetailComponent},
  {path:'contact', component:ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
