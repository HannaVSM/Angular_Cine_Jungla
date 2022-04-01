import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnacksComponent } from './snacks-components/snacks.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: SnacksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnacksRoutingModule { }
