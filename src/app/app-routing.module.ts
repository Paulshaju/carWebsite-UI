import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarHomeComponent } from './car-home/car-home.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'carHome', component: CarHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
