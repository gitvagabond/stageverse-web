import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from '../components/creators/creators.component';
import { CreatorsRouterModule } from '../router/creators-router/creators-router.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CreatorsComponent],
  imports: [
    CommonModule,
    CreatorsRouterModule,
    SharedModule
  ]
})
export class CreatorsModule { }
