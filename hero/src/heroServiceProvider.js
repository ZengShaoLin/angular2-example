//当需要传入不能注入的参数时，可以通过Factory Provider来实现

import HeroService from 'heroService';
import LoggerService from 'loggerService';
import { ConfigProvider } from 'configService';

export default {
    provide: HeroService,
    useFactory: (logger: LoggerService, config: ConfigProvider) => new HeroService(logger, config.name),
    deps: [LoggerService, ConfigProvider]
};