//可以使用@Input或Component.inputs来定义父组件传递给子组件的内容，类似broadcast
//可以使用@Output或Component.outputs来定义子组件传递给父组件的内容，类似emit
//使用EventEmitter来初始化@Output参数

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import HeroSearchService from 'heroSearchService';

@Component({
    moduleId: 'hero/src/',
    selector: 'hero-info',
    templateUrl: 'heroInfoComponent.html'
})
export default class HeroInfoComponent {
     constructor(hero: HeroSearchService, router: Router) {
        Object.assign(this, { hero, router, footerColspan: 5, searchTerms: new Subject() });
    }

    ngOnInit() {
        this.list = this.searchTerms
            .debounceTime(150)
            .distinctUntilChanged()
            .switchMap(term => this.hero.search(term))
            .catch(error => {
                console.log(error);
                return Observable.of([]);
            });
    }

    ngAfterViewInit() {
        this.searchItem();
    }

    searchItem() {
        this.searchTerms.next(this.searchName);
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