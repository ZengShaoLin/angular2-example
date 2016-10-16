//可以使用@Input或Component.inputs来定义父组件传递给子组件的内容，类似broadcast
//可以使用@Output或Component.outputs来定义子组件传递给父组件的内容，类似emit
//使用EventEmitter来初始化@Output参数

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import HttpService from 'httpService';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-info',
    templateUrl: 'heroInfoComponent.html'
})
export default class HeroInfoComponent {
     constructor(http: HttpService, router: Router) {
        Object.assign(this, { http, router, footerColspan: 5 });
    }

    ngOnInit() {
        this.http.getJson('heros').then(data => { this.list = data; });
    }

    trackByList(index, item) {
        return item.id;
    }

    del(index) {
        this.list.splice(index, 1);
    }
    
    edit(id) {
        this.router.navigateByUrl('/heroForm/' + id);
    }
}