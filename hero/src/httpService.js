import { Injectable } from '@angular/core';
import HeroSerivce from 'heroService';

@Injectable()
export default class HttpService {
    constructor(hero: HeroSerivce) {
        this.hero = hero;
        this.typeList = { hero: 'getHeros', heroItem: 'getHero', power: 'getPowers', sysName: 'getSystemName' };
    }

    getData(name, param) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => { 
                const data = this.hero[this.typeList[name]](param);
                resolve(data); 
            }, 300);
        });
        return promise;
    }
}