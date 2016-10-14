import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import HeroFormComponent from 'heroFormComponent';
import HeroInfoComponent from 'heroInfoComponent';
import AppComponent from 'appComponent';
import HeroServiceProvider from 'heroServiceProvider';
import LoggerService from 'loggerService';
import HttpService from 'httpService';
import { ConfigProvider, ConfigService } from 'configService';

@NgModule({
    providers: [HeroServiceProvider, LoggerService, HttpService, { provide: ConfigProvider, useValue: ConfigService }],    //引用angular services
    // exports  //声明当其他angular modules引用本modules，可以使用的组件
    imports: [BrowserModule, FormsModule],  //引用其他angular modules
    declarations: [AppComponent, HeroFormComponent, HeroInfoComponent],   //声明components和directives和pipes
    bootstrap: [AppComponent]   //在一开始启动的component列表
})
export class AppModule {
    constructor() {}
}
