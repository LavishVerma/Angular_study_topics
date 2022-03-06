import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path: 'template-driven' ,component : TemplateDrivenFormComponent },
  {path: 'reactive-form' , component : ReactiveFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
