import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'recetas-v2',
        appId: '1:143866591339:web:3404177091bd5c8b4e592e',
        storageBucket: 'recetas-v2.appspot.com',
        apiKey: 'AIzaSyBzbVqjUxszHcKQ59zWyu3Vkp9Q-p6JoxU',
        authDomain: 'recetas-v2.firebaseapp.com',
        messagingSenderId: '143866591339',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    // aqui los provier de google
  ],
});
