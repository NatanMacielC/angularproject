import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyLayoutComponent } from './containers/empty-layout/empty-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './view/login/login.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { HomeComponent } from './view/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { UsersListComponent } from './view/users_list/user.component';

const APP_CONTAINERS = [
  SimpleLayoutComponent,
  FullLayoutComponent,
  EmptyLayoutComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
