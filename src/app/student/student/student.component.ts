import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { studentSelector } from '../store/student.selector';
import { Observable } from 'rxjs';
import { student } from '../store/student.store';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentsList$!: Observable<student[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.studentsList$ = this.store.select(studentSelector);
  }
}
