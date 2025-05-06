import { Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [

    {path: 'account', component: SideNavComponent, children:
        [
          {path: 'dashboard', component: DashboardComponent},
          {path: 'users', component: UsersComponent},
          //{path: 'transactions', component: },
        ]
    },
];
