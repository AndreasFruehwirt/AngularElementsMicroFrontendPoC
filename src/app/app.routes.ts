import {Route, Routes, UrlSegment, UrlSegmentGroup} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientCWrapperComponent } from './client-c-wrapper/client-c-wrapper.component';
import { NotFoundComponent } from './not-found/not-found.component';

export function matcher(url: UrlSegment[]) {
    return url.length >= 0 && url[0].path.endsWith('domain-c') ? ({consumed: url}) : null;
}

export function ComplexUrlMatcher(paramName: string, regex: RegExp) {
  return (
    segments: UrlSegment[],
    segmentGroup: UrlSegmentGroup,
    route: Route) => {

    const parts = [regex];
    const posParams: { [key: string]: UrlSegment } = {};
    const consumed: UrlSegment[] = [];

    let currentIndex = 0;

    for (let i = 0; i < parts.length; ++i) {
      if (currentIndex >= segments.length) {
        return null;
      }
      const current = segments[currentIndex];

      const part = parts[i];
      if (!part.test(current.path)) {
        return null;
      }

      posParams[paramName] = current;
      consumed.push(current);
      currentIndex++;
    }

    if (route.pathMatch === 'full' &&
      (segmentGroup.hasChildren() || currentIndex < segments.length)) {
      return null;
    }

    return { consumed, posParams };
  }
}

export function YetAnotherUrlMatcher(pathToMatch: string) {
  return (
    url: UrlSegment[],
    segmentGroup: UrlSegmentGroup,
    route: Route
  ) => {
    return url.length >= 0 && url[0].path.endsWith(pathToMatch) ? ({consumed: url}) : null;
  }
}

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { matcher: YetAnotherUrlMatcher('domain-c'), component: ClientCWrapperComponent },
    { path: '**', component: NotFoundComponent},
];
