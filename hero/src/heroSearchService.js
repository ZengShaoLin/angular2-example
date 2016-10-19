import { Injectable, Optional } from '@angular/core';
import { Headers, Http } from '@angular/http';
import LoggerService from 'loggerService';

@Injectable()
export default class HeroSearchService {
    constructor(http: Http, @Optional logger: LoggerService) {
        Object.assign(this, { http, logger });
    }

    search(name) {
        this.logger.log(`get heros with condition ${ name }`);

        return this.http.get('hero/json/heros.json').map((response) => { 
            let data = [];

            response.json().map((item, index, arr) => {
                if(!name || item.name.indexOf(name) >= 0) {
                    data.push(item);
                }
            }); 
            return data;
        });
    }
}