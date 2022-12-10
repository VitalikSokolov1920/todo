import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaseListComponent} from "./case-list/case-list.component";
import {NewCaseComponent} from "./new-case/new-case.component";
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'cases',
        component: CaseListComponent,
      },
      {
        path: 'new',
        component: NewCaseComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
