import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './containers/full-layout';
import { SimpleLayoutComponent } from './containers/simple-layout';
import { HomeComponent } from './view/home/home.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { UsersListComponent } from './view/users_list/user.component';
import { LoginComponent } from './view/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    data: { title: 'Login' },
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'login',
    component: SimpleLayoutComponent,
    data: { title: 'Login' },
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'home',
    component: FullLayoutComponent,
    data: { title: 'Home' },
    canActivate: [AuthGuard],
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'cadastro',
    component: FullLayoutComponent,
    data: { title: 'Cadastro' },
    canActivate: [AuthGuard],
    children: [{ path: '', component: CadastroComponent }],
  },
  {
    path: 'lista',
    component: FullLayoutComponent,
    data: { title: 'Lista' },
    canActivate: [AuthGuard],
    children: [{ path: '', component: UsersListComponent }],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
