import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import HttpService from 'httpService';
import Hero from 'hero';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-form',
    templateUrl: 'heroFormComponent.html',
    styleUrls: ['../css/app.css']
})
export default class HeroFormComponent {
    constructor(http: HttpService, location: Location, route: ActivatedRoute) {
        Object.assign(this, { http, location, route, item: new Hero() });
    }

    ngOnInit() {
        this.http.getData('power')
            .then(data => { this.powers = data; })
            .catch(error => {});

        this.route.params.forEach(param => {
            this.http.getData('heroItem', +param.id).then(data => { this.item = data; });
        });
    }

    save() {
        alert('edit hero success');
        this.location.back();
    }

    changeName(name) {}

    back() {
        this.location.back();
    }
}