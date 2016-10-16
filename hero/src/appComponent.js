import { Component, Inject, Optional } from '@angular/core';
import { ConfigProvider } from 'configService';

@Component({
    selector: 'my-app',
    templateUrl: 'hero/src/appComponent.html'
})
export default class AppComponent {
    constructor(@Optional() @Inject(ConfigProvider) config: ConfigProvider) {
        Object.assign(this, { config });
    }

    ngOnInit() {}
}