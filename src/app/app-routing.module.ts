import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as AppComponents from './components'

const routes: Routes = [
  { path: '', component: AppComponents.GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
