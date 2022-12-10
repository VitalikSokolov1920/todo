import {Component, HostBinding, OnInit} from '@angular/core';
import {SelectItem} from "../../core/select-list/models/select-item";
import {Priority, PriorityNameForUserView} from "../../core/select-list/models/priority";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CaseService} from "../services/case.service";
import {ActivatedRoute, Router} from "@angular/router";
import {transition, trigger, useAnimation} from "@angular/animations";
import {createComponentAnimation} from "../../animations/create-component.animation";
import {destroyComponentAnimation} from "../../animations/destroy-component.animation";
import {ConfigPopupService} from "../../core/popup-info/services/config-popup.service";

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss'],
  animations: [
    trigger('newCase', [
      transition(':enter', [
        useAnimation(createComponentAnimation)
      ]),
      transition(':leave', [
        useAnimation(destroyComponentAnimation)
      ])
    ]),
  ],
  providers: [
    ConfigPopupService
  ]
})
export class NewCaseComponent implements OnInit {
  @HostBinding('@newCase')
  newCase: any;

  show = false;

  options: SelectItem<Priority>[];

  formGroup: FormGroup;

  constructor(
    private configPopupService: ConfigPopupService,
    private fb: FormBuilder,
    private caseService: CaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.options = [
      {
        value: PriorityNameForUserView.DEFAULT,
        id: Priority.DEFAULT,
      },
      {
        value: PriorityNameForUserView.LOW,
        id: Priority.LOW,
      },
      {
        value: PriorityNameForUserView.MEDIUM,
        id: Priority.MEDIUM,
      },
      {
        value: PriorityNameForUserView.HIGH,
        id: Priority.HIGH,
      },
    ];
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      priority: this.fb.control('', [Validators.required]),
      description: this.fb.control(''),
    });
  }

  showList() {
    this.show = true;
  }

  clickOutside() {
    this.show = false;
  }

  prioritySelected(priority: SelectItem<Priority> | null) {
    if (priority) {
      this.formGroup.controls.priority.setValue(priority.value);
    } else {
      this.formGroup.controls.priority.setValue('');
    }

    this.show = false;
  }

  get name(): AbstractControl {
    return this.formGroup.controls.name;
  }

  get priority(): AbstractControl {
    return this.formGroup.controls.priority;
  }

  get description(): AbstractControl {
    return this.formGroup.controls.description;
  }

  submit() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      this.caseService.createCase(
        this.name.value,
        this.priority.value,
        this.description.value
      );

      this.configPopupService.createPopup({});
    }
  }

  back() {
    this.router.navigate(['../cases'], {relativeTo: this.activatedRoute});
  }
}
