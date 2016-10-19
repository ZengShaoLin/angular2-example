import { Injectable } from '@angular/core';
import LoggerService from 'loggerService';

@Injectable()
export default class LoggerBetterService extends LoggerService {
    constructor() {
        super();
    }

    log(message) {
        this.history.push({ message, createTime: new Date() });
        console.log(`Better Logger: ${ message }`);
    }

    getHistory()  {
        return this.history;
    }
}