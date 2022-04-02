import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaComponent } from './sala-component/sala.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: SalaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaRoutingModule { }
