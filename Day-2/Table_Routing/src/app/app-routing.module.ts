import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: "",
    component: ButtonComponent
  },
  {
    path: "getData",
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
