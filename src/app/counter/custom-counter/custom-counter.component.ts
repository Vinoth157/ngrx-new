import { CUSTOMINCREMENT, CHANGEDESCRIPTION } from './../store/counter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/counter.state';
import { updateDescription } from '../store/counter.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent implements OnInit {
  value!: number;
  description!: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(updateDescription).subscribe((description) => {
      console.log('description update called');
      this.description = description;
    });
  }

  incrementCustom() {
    this.store.dispatch(CUSTOMINCREMENT({ value: +this.value }));
  }

  changeDesc() {
    this.store.dispatch(CHANGEDESCRIPTION());
  }
}
