import { Route } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FinanceResolver } from 'app/modules/admin/example/finance.resolvers';

export const financeRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
        resolve: {
            data: FinanceResolver,
        },
    },
];
