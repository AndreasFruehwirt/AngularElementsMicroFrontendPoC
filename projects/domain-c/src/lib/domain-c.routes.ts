import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page2Component } from './page2/page2.component';

export const DOMAIN_C_ROUTES: Routes = [
    { path: 'domain-c', children: [
        { path: '', redirectTo: 'page1', pathMatch: 'full'},
        { path: 'page1', component: Page1Component},
        { path: 'page2', component: Page2Component},
        { 
            path: 'lazy', 
            loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) 
        }
    ]},
    { path: '**', component: NotFoundComponent}
];
