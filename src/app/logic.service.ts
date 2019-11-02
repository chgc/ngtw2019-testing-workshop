import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
  constructor() {}

  dosomething(a) {
    console.log('logic service trigger');
    return a * 10;
  }
}
