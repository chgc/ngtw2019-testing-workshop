import { Injectable } from '@angular/core';
import { LogicService } from './logic.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private logic: LogicService) {}

  add(a, b) {
    console.log(a, b);
    a = this.logic.dosomething(a);
    return a + b;
  }

  divide(a, b) {
    return 0.5;
  }
}
