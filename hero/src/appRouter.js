import { Routes, RouterModule } from '@angular/router';
import HeroInfoComponent from 'heroInfoComponent';
import HeroFormComponent from 'heroFormComponent';
import DashboardComponent from 'dashboardComponent';
import LoggerHistoryComponent from 'loggerHistoryComponent';

const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroInfo',
        component: HeroInfoComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroForm/:id',
        component: HeroFormComponent
    },
    {
        path: 'loggerHistory',
        component: LoggerHistoryComponent
    }
];

export default RouterModule.forRoot(routes);