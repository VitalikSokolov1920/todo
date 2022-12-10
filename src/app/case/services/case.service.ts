import {forwardRef, Injectable} from "@angular/core";
import {CaseModule} from "../case.module";
import {Case} from "../models/case";
import {Priority} from "../../core/select-list/models/priority";

@Injectable({
  providedIn: forwardRef(() =>  CaseModule)
})
export class CaseService {
  private cases: Case[] = [];
  private static olderId = 0;

  createCase(name: string, priority: Priority, description: string) {
    let newCase: Case = {
      name,
      priority,
      description,
      isComplete: false,
      id: CaseService.olderId++
    };

    this.cases.push(newCase);
  }

  getAllCases() {
    return this.cases;
  }

  removeCase(caseId: number): void {
    const index = this.cases.findIndex(case1 => case1.id == caseId);

    if (index === -1) {
      return;
    }

    this.cases.splice(index, 1);
  }

  changeCompleteStatus(caseId: number, completeStatus: boolean): void {
    const chCase = this.cases.find(c => c.id === caseId);

    if (!chCase) {
      return;
    }

    chCase.isComplete = completeStatus;
  }
}
