import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { CreatorsComponent } from '../../components/creators/creators.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'creators', component: CreatorsComponent }
    ])
  ]
})
export class CreatorsRouterModule { }
