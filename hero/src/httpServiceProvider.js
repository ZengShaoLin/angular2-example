//当需要传入不能注入的参数时，可以通过Factory Provider来实现

import { Http } from '@angular/http';
import HttpService from 'httpService';
import LoggerService from 'loggerService';
import { ConfigProvider } from 'configService';

export default {
    provide: HttpService,
    useFactory: (http: Http, logger: LoggerService, config: ConfigProvider) => new HttpService(http, logger, config.name),
    deps: [Http, LoggerService, ConfigProvider]
};