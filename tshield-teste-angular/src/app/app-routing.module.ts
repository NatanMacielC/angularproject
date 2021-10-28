import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './containers/full-layout';
import { SimpleLayoutComponent } from './containers/simple-layout';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  {
    path: '', component: SimpleLayoutComponent, data: { title: 'Login' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'login', component: SimpleLayoutComponent, data: { title: 'Login' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'home', component: FullLayoutComponent, data: { title: 'Home' },
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
