import { Routes, RouterModule } from '@angular/router';
import HeroInfoComponent from 'heroInfoComponent';
import HeroFormComponent from 'heroFormComponent';
import DashboardComponent from 'dashboardComponent';

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
    }
];

export default RouterModule.forRoot(routes);