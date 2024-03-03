import { UpdateemployeesComponent } from './employees/updateemployees/updateemployees.component';
import { HomeComponent } from './home/home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { UsersComponent } from './users/users/users.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { AddemployeesComponent } from './employees/addemployees/addemployees.component';
import { StudentComponent } from './student/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      {
        path: 'add',
        component: AddemployeesComponent,
      },
      {
        path: 'edit/:id',
        component: UpdateemployeesComponent,
      },
    ],
  },
  {
    path: 'students',
    component: StudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
