import { Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientCWrapperComponent } from './client-c-wrapper/client-c-wrapper.component';
import { NotFoundComponent } from './not-found/not-found.component';

export function matcher(url: UrlSegment[]) {
    return url.length >= 0 && url[0].path.endsWith('domain-c') ? ({consumed: url}) : null;
}

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { matcher, component: ClientCWrapperComponent },
    { path: '**', component: NotFoundComponent},    
];