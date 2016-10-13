import { Component, Inject, Optional } from '@angular/core';
import { ConfigProvider } from 'configService';
import HeroService from 'heroService';

@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-offset-2 col-md-8">
                    <div [hidden]="show">
                        <h1>{{ systemName }} : Hero List <small>Version: {{ config.version }}</small></h1>
                        <div class="row row-space">
                            <div class="col-md-12">
                                <button class="btn btn-default" (click)="showControl()">Show Hero Form</button>
                            </div>
                        </div>
                        <hero-info></hero-info>
                    </div>
                    <div [hidden]="!show">
                        <h1>{{ systemName }} : Hero Form <small>Author: {{ config.author }}</small></h1>
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
    constructor(@Optional() @Inject(ConfigProvider) configService: ConfigProvider, heroService: HeroService) {
        this.config = configService;
        this.systemName = heroService.getSystemName();
    }

    showControl() {
        this.show = !this.show;
    }
}