import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'terms-of-service', component: TermsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TermsRoutingModule { }
