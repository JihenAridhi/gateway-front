import { Routes } from '@angular/router';
import { SideNavComponent } from './components/admin/side-nav/side-nav.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/wallet/profile/profile.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //{path: 'profile', component:},
  {path: 'account', component: SideNavComponent, children:
      [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'users', component: UsersComponent},
        //{path: 'transactions', component: },
      ]
  },
  {path: 'wallet', children: [
    {path: 'profile', component: ProfileComponent}
  ]}
];
