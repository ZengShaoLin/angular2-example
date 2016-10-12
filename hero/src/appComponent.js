import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <div *ngIf="!show">
                        <h1>Hero List</h1>
                        <div class="row row-space">
                            <div class="col-md-12">
                                <button class="btn btn-default" (click)="showControl()">Show Hero Form</button>
                            </div>
                        </div>
                        <hero-info></hero-info>
                    </div>
                    <div *ngIf="show">
                        <h1>Hero Form</h1>
                        <div class="row row-space">
                            <div class="col-md-12">
                                <button class="btn btn-default" (click)="showControl()">Show Hero List</button>
                            </div>
                        </div>
                        <hero-form></hero-form>
                    </div>
                </div>
            </div>
        </div>
    `
})
export default class AppComponent {
    constructor() {}

    showControl() {
        this.show = !this.show;
    }
}