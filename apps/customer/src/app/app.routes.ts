import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    {path: '', loadChildren: () => import('@tahaluf/formbuilder').then(m => m.routes)},
];
