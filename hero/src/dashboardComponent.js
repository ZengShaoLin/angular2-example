import { Component } from '@angular/core';
import { Router } from '@angular/router';
import HttpService from 'httpService';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-dashboard',
    templateUrl: 'dashboardComponent.html',
    styles: [`
        .hero-margin {
            margin-right: 15px;
        }

        .pointer {
            cursor: pointer;
        }
    `]
})
export default class DashboardComponent {
    constructor(http: HttpService, router: Router) {
        Object.assign(this, { http, router });
    }

    ngOnInit() {
        this.http.getJson('heros').then(data => { this.list = data.slice(1, 5); });
    }

    detail(id) {
        this.router.navigateByUrl('/heroForm/' + id);
    }
}