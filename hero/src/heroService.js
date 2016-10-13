import { Injectable, Optional } from '@angular/core';
import LoggerService from 'loggerService';
import Hero from 'hero';

@Injectable()
export default class HeroService {
    constructor(@Optional() logger: LoggerService, systemName) {
        this.logger = logger;
        this.systemName = systemName;
    }

    getHeros() {
        this.logger.log('getHeros');

        const heroList = [
            new Hero(11, 'Mr. Nice', undefined, undefined, false),
            new Hero(12, 'Narco', undefined, undefined, false),
            new Hero(13, 'Bombasto', undefined, undefined, false),
            new Hero(14, 'Celeritas', undefined, undefined, false),
            new Hero(15, 'Magneta', undefined, undefined, false),
            new Hero(16, 'RubberMan', undefined, undefined, false),
            new Hero(17, 'Dynama', undefined, undefined, false),
            new Hero(18, 'Dr IQ', undefined, undefined, true),
            new Hero(19, 'Magma', undefined, undefined, true),
            new Hero(20, 'Tornado', undefined, undefined, true)
        ];
        return heroList;
    }

    getPowers() {
        this.logger.log('getPowers');
        
        const powerList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        return powerList;
    }

    getSystemName() {
        return this.systemName;
    }
}