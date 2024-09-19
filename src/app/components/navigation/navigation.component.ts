import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonTabs,
  IonTab,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search, home, person, homeOutline, albumsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTab,
    IonHeader,
    IonToolbar,
    IonContent,
    IonTitle,
    IonTabBar,
    IonTabButton,
    IonIcon,
    RouterLink
  ],
})
export class NavigationComponent implements OnInit {
  constructor() {
    addIcons({homeOutline,albumsOutline,search,person,library,playCircle,radio,home});
  }

  ngOnInit() {}
}
