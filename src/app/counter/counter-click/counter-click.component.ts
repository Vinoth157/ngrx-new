import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { DECREMENT, INCREMENT } from '../store/counter.action';
import { CounterState } from '../store/counter.state';

@Component({
  selector: 'app-counter-click',
  templateUrl: './counter-click.component.html',
  styleUrls: ['./counter-click.component.css'],
})
export class CounterClickComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(INCREMENT());
  }

  onDecrement() {
    this.store.dispatch(DECREMENT());
  }
}
