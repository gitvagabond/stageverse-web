import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseComponent } from '../../components/muse/muse.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'muse', component: MuseComponent }
    ])
  ],
  exports: [RouterModule]
})
export class MuseRouterModule { }
