import { Store } from '@ngrx/store';
import { employee } from './../store/employees.store';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/state/app.state';
import { employeeOneSelector } from '../store/employees.selectors';

@Component({
  selector: 'app-updateemployees',
  templateUrl: './updateemployees.component.html',
  styleUrls: ['./updateemployees.component.css'],
})
export class UpdateemployeesComponent implements OnInit {
  updateForm!: UntypedFormGroup;
  post: employee | undefined;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      this.store.select(employeeOneSelector, { id }).subscribe((data) => {
        this.post = data;
        this.createForm();
        console.log(this.post);
      });
    });
  }

  createForm() {
    this.updateForm = new UntypedFormGroup({
      EmpName: new UntypedFormControl(this.post?.name, [
        Validators.required,
        Validators.minLength(5),
      ]),
      EmpExperience: new UntypedFormControl(this.post?.experience, [
        Validators.required,
      ]),
    });
  }
  updateEmployee() {
    const employee: employee = {
      name: this.updateForm.value.EmpName,
      experience: this.updateForm.value.EmpExperience,
      id: 0,
    };
  }
}
