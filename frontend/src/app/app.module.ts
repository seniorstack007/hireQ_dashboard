import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

import { SidebarModule } from './components/sidebar/sidebar.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth.guard';
import { SecureInnerPagesGuard } from './services/auth/secure-inner-pages.guard';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config/config.service';
import { TokenStorageService } from './services/auth/token-storage.service';
import { authInterceptorProviders } from './helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,

  ],
  providers: [
    AuthService,
    AuthGuard,
    SecureInnerPagesGuard,
    ConfigService,
    TokenStorageService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
