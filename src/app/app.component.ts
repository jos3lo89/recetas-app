import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonContent,
  IonHeader,
  IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTitle, IonToolbar,
    IonFooter,
    IonHeader,
    IonContent,
    IonApp,
    IonRouterOutlet,
    NavigationComponent,
    HeaderComponent,
  ],
})
export class AppComponent {
  constructor() {}
}
