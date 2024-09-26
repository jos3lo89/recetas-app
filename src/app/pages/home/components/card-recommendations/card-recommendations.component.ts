import { Component, OnInit } from '@angular/core';
import {
  IonList,
  IonGrid,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonCard,
  IonLabel,
  IonListHeader,
} from '@ionic/angular/standalone';
import { categorias } from '../card-categorie/categories';

@Component({
  selector: 'app-card-recommendations',
  templateUrl: './card-recommendations.component.html',
  styleUrls: ['./card-recommendations.component.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonLabel,
    IonCard,
    IonItem,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonGrid,
    IonList,
  ],
})
export class CardRecommendationsComponent implements OnInit {
  categorias = categorias;

  constructor() {}
  ngOnInit() {}
}
