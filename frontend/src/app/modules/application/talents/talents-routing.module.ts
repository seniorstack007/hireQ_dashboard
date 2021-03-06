import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalentsComponent } from './talents.component';

const routes: Routes = [
  {
    path : '',
    component : TalentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentsRoutingModule { }
