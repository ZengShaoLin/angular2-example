import { Component } from '@angular/core';
import HeroService from 'heroService';
import Hero from 'hero';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-form',
    templateUrl: 'heroFormComponent.html'
})
export default class HeroFormComponent {
    constructor(heroService: HeroService) {
        this.powers = heroService.getPowers();
        this.item = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }

    onSubmit() {
        this.submitted = true;
    }

    changeName(name) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => !name ? reject('error') : resolve('success'), 50);
        });

        promise
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    clear() {
        this.item = new Hero();
    }

    edit() {
        this.submitted = false;
    }
}