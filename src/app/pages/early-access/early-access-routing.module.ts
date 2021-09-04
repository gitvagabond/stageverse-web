import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarlyAccessComponent } from './early-access.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'early-access', component: EarlyAccessComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EarlyAccessRoutingModule { }
