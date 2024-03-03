import { employee } from './../store/employees.store';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { employeeAddAction } from '../store/employees.action';

@Component({
  selector: 'app-addemployees',
  templateUrl: './addemployees.component.html',
  styleUrls: ['./addemployees.component.css'],
})
export class AddemployeesComponent implements OnInit {
  employeeForm!: UntypedFormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.employeeForm = new UntypedFormGroup({
      EmpName: new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      EmpExperience: new UntypedFormControl(null, [Validators.required]),
    });
  }

  addEmployee() {
    const employee: employee = {
      name: this.employeeForm.value.EmpName,
      experience: this.employeeForm.value.EmpExperience,
      id: 0,
    };

    this.store.dispatch(employeeAddAction({ employee }));
  }
}
