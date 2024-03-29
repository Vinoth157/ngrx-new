import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterVal: number = 0;
  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.counterVal++;
  }
  decrement() {
    this.counterVal--;
  }
}
