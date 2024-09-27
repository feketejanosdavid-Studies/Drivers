import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"drivers", component:DriversComponent},
  {path:"", redirectTo:"drivers", pathMatch:"full"},

  {path:"**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
