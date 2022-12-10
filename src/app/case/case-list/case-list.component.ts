import {Component, OnInit} from '@angular/core';
import {Case} from "../models/case";
import {Priority} from "../../core/select-list/models/priority";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CaseService} from "../services/case.service";

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
  animations: [
    trigger('case', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s')
      ]),
      transition(':leave', [
        animate('0.3s', style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]
})
export class CaseListComponent implements OnInit {

  cases: Case[] = [
    {
      isComplete: true,
      priority: Priority.HIGH,
      id: 0,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 1'
    },
    {
      isComplete: false,
      priority: Priority.LOW,
      id: 1,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 2'
    },
    {
      isComplete: false,
      priority: Priority.MEDIUM,
      id: 2,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 3'
    },
    {
      isComplete: false,
      priority: Priority.LOW,
      id: 3,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 4'
    },
    {
      isComplete: false,
      priority: Priority.MEDIUM,
      id: 4,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 5'
    },
    {
      isComplete: true,
      priority: Priority.MEDIUM,
      id: 5,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 6'
    },
    {
      isComplete: false,
      priority: Priority.LOW,
      id: 6,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 7'
    },
    {
      isComplete: true,
      priority: Priority.HIGH,
      id: 7,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 8'
    },
    {
      isComplete: true,
      priority: Priority.MEDIUM,
      id: 8,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 9'
    },
    {
      isComplete: false,
      priority: Priority.MEDIUM,
      id: 9,
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
      name: 'Task 10'
    },
  ];

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    // this.cases = this.caseService.getAllCases();
  }

  removeCase(rCase: Case) {
    this.caseService.removeCase(rCase.id);
  }

  changeCompleteStatus(cCase: Case, isComplete: boolean) {
    this.caseService.changeCompleteStatus(cCase.id, isComplete);
  }
}
