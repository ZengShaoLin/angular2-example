import { Injectable } from '@angular/core';
import HeroSerivce from 'heroService';

@Injectable()
export default class HttpService {
    constructor(hero: HeroSerivce) {
        this.hero = hero;
        this.typeList = { hero: 'getHeros', power: 'getPowers', sysName: 'getSystemName' };
    }

    getData(name) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => { 
                const data = this.hero[this.typeList[name]]();
                resolve(data); 
            }, 500);
        });
        return promise;
    }
}