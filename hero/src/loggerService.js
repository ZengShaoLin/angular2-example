import { Injectable } from '@angular/core';

@Injectable()
export default class LoggerService {
    constructor() {
        this.history = [];
    }

    log(message) {
        this.history.push(message);
        console.log('Logger: ' + message);
    }
}