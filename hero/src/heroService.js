import { Injectable, Optional } from '@angular/core';
import LoggerService from 'loggerService';
import Hero from 'hero';

@Injectable()
export default class HeroService {
    constructor(@Optional() logger: LoggerService, systemName) {
        Object.assign(this, { logger, systemName });
    }

    getHeros() {
        const heroList = [
            new Hero(11, 'Mr. Nice', undefined, undefined, false),
            new Hero(12, 'Narco', undefined, undefined, false),
            new Hero(13, 'Bombasto', undefined, undefined, false),
            new Hero(14, 'Celeritas', undefined, undefined, false),
            new Hero(15, 'Magneta', undefined, undefined, false),
            new Hero(16, 'RubberMan', undefined, undefined, false),
            new Hero(17, 'Dynama', undefined, undefined, false),
            new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', true),
            new Hero(19, 'Magma', undefined, undefined, true),
            new Hero(20, 'Tornado', undefined, undefined, true)
        ];

        this.logger.log('getHeros');
        return heroList;
    }

    getHero(id) {
        const heros = this.getHeros();
        
        this.logger.log('getHero');
        return heros.find((value, key, arr) => value.id === id);
    }

    getPowers() {
        const powerList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

        this.logger.log('getPowers');
        return powerList;
    }

    getSystemName() {
        this.logger.log('getSystemName');
        return this.systemName;
    }
}