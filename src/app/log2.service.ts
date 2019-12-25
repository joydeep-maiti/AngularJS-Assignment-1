import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Log2Service {
  logger(msg) {
    console.log("Hi!"+msg);
  }
  constructor() { }
}
