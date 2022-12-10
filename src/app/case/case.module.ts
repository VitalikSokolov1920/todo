import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import {CaseListComponent} from "./case-list/case-list.component";
import {NewCaseComponent} from "./new-case/new-case.component";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ConvertPriorityPipe } from './case-list/convert-priority/convert-priority.pipe';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
    declarations: [
        CaseListComponent,
        NewCaseComponent,
        ConvertPriorityPipe,
        NavigationComponent,
    ],
    exports: [],
    imports: [
        CommonModule,
        CaseRoutingModule,
        CoreModule,
        ReactiveFormsModule
    ]
})
export class CaseModule { }
