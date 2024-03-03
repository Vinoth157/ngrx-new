import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterClickComponent } from './counter/counter-click/counter-click.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/store/counter.reducer';
import { CustomCounterComponent } from './counter/custom-counter/custom-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UsersComponent } from './users/users/users.component';
import { appReducer } from './state/app.state';
import { EmployeesComponent } from './employees/employees/employees.component';
import { AddemployeesComponent } from './employees/addemployees/addemployees.component';
import { UpdateemployeesComponent } from './employees/updateemployees/updateemployees.component';
import { StudentComponent } from './student/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterClickComponent,
    CounterOutputComponent,
    CustomCounterComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    EmployeesComponent,
    AddemployeesComponent,
    UpdateemployeesComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
