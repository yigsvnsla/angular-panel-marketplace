import { ApplicationConfig, importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { registerLocaleData } from '@angular/common';
import locale_ES_EC from '@angular/common/locales/es-EC';
import locale_ES_EC_Extra from '@angular/common/locales/extra/es-EC';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './store/states/root.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_EFFECTS } from './store/effects/root.effects';
import { UrlPatcherInterceptor } from './interceptors/url-patcher.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(locale_ES_EC, locale_ES_EC_Extra);

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      StoreModule.forRoot(ROOT_REDUCERS),
      EffectsModule.forRoot(ROOT_EFFECTS),
      StoreDevtoolsModule.instrument({
        name:'new panel marketplace',
        maxAge: 25,
        logOnly: !isDevMode(),
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
      }),
    ),

    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'es-EC' },
    { provide: HTTP_INTERCEPTORS, useClass: UrlPatcherInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ]
};
