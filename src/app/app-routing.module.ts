import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DearPuppyComponent } from './dear-puppy/dear-puppy.component';

const routes: Routes = [
  { path: 'first-page', component: FirstComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'dear-puppy', component: DearPuppyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
