import { Component, Inject, Optional } from '@angular/core';
import { ConfigProvider } from 'configService';
import HttpService from 'httpService';

@Component({
    selector: 'my-app',
    templateUrl: 'hero/src/appComponent.html'
})
export default class AppComponent {
    constructor(@Optional() @Inject(ConfigProvider) config: ConfigProvider, http: HttpService) {
        Object.assign(this, { config, http });
    }

    ngOnInit() {
        this.http.getData('sysName').then(data => { this.systemName = data; });
    }
}