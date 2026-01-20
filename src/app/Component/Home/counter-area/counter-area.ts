import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-area',
  imports: [],
  templateUrl: './counter-area.html',
  styleUrl: './counter-area.css',
})
export class CounterArea implements OnInit {
  counters = {
    completed: 0,
    clients: 0,
    services: 0,
    awards: 0,
  };

  ngOnInit(): void {
    this.startCounter('completed', 107);
    this.startCounter('clients', 52);
    this.startCounter('services', 71);
    this.startCounter('awards', 19);
  }

  startCounter(key: 'completed' | 'clients' | 'services' | 'awards', target: number) {
    let count = 0;

    const interval = setInterval(() => {
      count++;
      this.counters[key] = count;

      if (count >= target) {
        clearInterval(interval);
      }
    }, 10);
  }
}
