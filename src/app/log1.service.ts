import { Injectable } from '@angular/core';

@Injectable()
export class Log1Service {
    logger(msg) {
        console.log("Hi!"+msg);
    }

}