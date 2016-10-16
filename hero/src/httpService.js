import { Injectable, Optional } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import LoggerService from 'loggerService';

@Injectable()
export default class HttpService {
    constructor(http: Http, @Optional logger: LoggerService, sysName) {
        Object.assign(this, { http, logger, sysName });
    }
    
    getJson(name) {
        let promise = new Promise((resolve, reject) => {
            this.logger.log(`get ${ name }`);

            this.http
                .get(`hero/json/${ name }.json`)
                .toPromise()
                .then(response => resolve(response.json()))
                .catch(error => reject(error));
        });
        return promise;
    }

    getSysName() {
        this.logger.log(`get sysName`);
        return this.sysName;
    }
}