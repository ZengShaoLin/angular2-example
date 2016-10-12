import { Injectable } from '@angular/core';
import Hero from 'hero';

@Injectable()
export default class HeroService {
    constructor() {}

    getHeros() {
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
        const powerList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        return powerList;
    }
}

  