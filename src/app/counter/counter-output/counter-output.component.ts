import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { getCounter } from '../store/counter.selectors';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  counter$: Observable<CounterState> = new Observable<CounterState>();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter) => {
      console.log('counter update called');
      this.counter = counter;
    });

    this.counter$ = this.store.select('counter');
  }
}
