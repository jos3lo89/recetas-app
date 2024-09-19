import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonListHeader, IonItem, IonLabel, IonList, IonCol, IonGrid, IonRow } from "@ionic/angular/standalone";
import { categorias } from './categories';

@Component({
  selector: 'app-card-categorie',
  templateUrl: './card-categorie.component.html',
  styleUrls: ['./card-categorie.component.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, IonList, IonLabel, IonItem, IonListHeader, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle]
})
export class CardCategorieComponent implements OnInit {


  categorias = categorias

  constructor() {}


  ngOnInit() {}
}
