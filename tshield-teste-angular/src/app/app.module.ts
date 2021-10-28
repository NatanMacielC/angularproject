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

const APP_CONTAINERS = [
  SimpleLayoutComponent,
  FullLayoutComponent,
  EmptyLayoutComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
