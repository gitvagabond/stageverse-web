import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'privacy', component: PrivacyComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PrivacyRoutingModule { }
