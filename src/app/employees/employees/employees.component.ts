import { Observable } from 'rxjs';
import { AppState } from './../../state/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { employeeSelector } from '../store/employees.selectors';
import { employee, employeeState } from '../store/employees.store';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employeeList$!: Observable<employee[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(employeeSelector).subscribe((data) => {
      console.log(data);
    });

    this.employeeList$ = this.store.select(employeeSelector);
  }
}
