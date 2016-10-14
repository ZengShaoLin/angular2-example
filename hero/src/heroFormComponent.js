import { Component } from '@angular/core';
import HttpService from 'httpService';
import Hero from 'hero';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-form',
    templateUrl: 'heroFormComponent.html'
})
export default class HeroFormComponent {
    constructor(http: HttpService) {
        this.item = new Hero(18, 'DR IQ', null, 'Chuck Overstreet');
        this.submitted = false;

        http.getData('power').then(data => { 
            this.powers = data;
            this.item.power = data[0];
         })
        .catch(error => {});
    }

    onSubmit() {
        this.submitted = true;
    }

    changeName(name) {
        this.item.name = name.toUpperCase();
    }

    clear() {
        this.item = new Hero();
    }

    edit() {
        this.submitted = false;
    }
}