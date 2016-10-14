//可以使用@Input或Component.inputs来定义父组件传递给子组件的内容，类似broadcast
//可以使用@Output或Component.outputs来定义子组件传递给父组件的内容，类似emit
//使用EventEmitter来初始化@Output参数

import { Component } from '@angular/core';
import HttpService from 'httpService';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-info',
    templateUrl: 'heroInfoComponent.html'
})
export default class HeroInfoComponent {
     constructor(http: HttpService) {
        this.footerColspan = 3;

        http.getData('hero')
            .then(data => { this.list = data; })
            .catch(error => {});
    }

    trackByList(index, item) {
        return item.id;
    }

    del(i) {
        this.list.splice(i, 1);
    }
    
    edit(...params) {
        console.log(params);
    }
}