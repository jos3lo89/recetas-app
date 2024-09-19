import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonAvatar, IonButton } from "@ionic/angular/standalone"
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  standalone: true,
  imports :[IonAvatar, IonButton, RouterLink]
})
export class UserMenuComponent  implements OnInit {


  isAtuh = false

  constructor() { }

  ngOnInit() {}

}
