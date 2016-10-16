import { Component, Optional } from '@angular/core';
import LoggerService from 'loggerService';

@Component({
    moduleId: 'hero/src/',
    selector: 'logger-history',
    templateUrl: 'loggerHistoryComponent.html'
})
export default class LoggerHistoryComponent {
    constructor(@Optional() logger: LoggerService) {
        Object.assign(this, { logger });
    }

    ngOnInit() {
        this.historyList = this.logger.getHistory();
    }
}