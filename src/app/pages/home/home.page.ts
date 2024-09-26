import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
   IonListHeader } from '@ionic/angular/standalone';
import { CardCategorieComponent } from './components/card-categorie/card-categorie.component';
import { CardRecommendationsComponent } from './components/card-recommendations/card-recommendations.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonListHeader,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonAvatar,
    IonLabel,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CardCategorieComponent,
    CardRecommendationsComponent,
  ],
})
export class HomePage  {


  constructor() {}


}
