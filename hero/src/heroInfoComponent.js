import { Component } from '@angular/core';
import HeroService from 'heroService';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-info',
    templateUrl: 'heroInfoComponent.html',
    providers: []
})
export default class HeroInfoComponent {
     constructor(heroService: HeroService) {
        this.list = heroService.getHeros();
    }

    del(i) {
        this.list.splice(i, 1);
    }
    
    edit(...params) {
        console.log(params);
    }
}