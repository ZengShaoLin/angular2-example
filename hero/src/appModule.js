import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjsExtensions';
import AppRouter from 'appRouter';
import HeroFormComponent from 'heroFormComponent';
import HeroInfoComponent from 'heroInfoComponent';
import DashboardComponent from 'dashboardComponent';
import LoggerHistoryComponent from 'loggerHistoryComponent';
import AppComponent from 'appComponent';
import HeroSearchService from 'heroSearchService';
import HttpServiceProvider from 'httpServiceProvider';
import LoggerService from 'loggerService';
import LoggerBetterService from 'loggerBetterService';
import { ConfigProvider, ConfigService } from 'configService';

@NgModule({
    providers: [
        HeroSearchService,
        HttpServiceProvider, 
        { provide: LoggerService, useClass: LoggerBetterService }, 
        { provide: ConfigProvider, useValue: ConfigService }
    ],    //引用angular services
    // exports  //声明当其他angular modules引用本modules，可以使用的组件
    imports: [BrowserModule, FormsModule, HttpModule, AppRouter],  //引用其他angular modules
    declarations: [
        AppComponent, 
        HeroFormComponent, 
        HeroInfoComponent, 
        DashboardComponent, 
        LoggerHistoryComponent
    ],   //声明components和directives和pipes
    bootstrap: [AppComponent]   //在一开始启动的component列表
})
export class AppModule {
    constructor() {}
}
