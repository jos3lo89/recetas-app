import { Component, OnInit } from '@angular/core';
import {IonAvatar} from "@ionic/angular/standalone"
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  standalone: true,
  imports :[IonAvatar]
})
export class UserMenuComponent  implements OnInit {


  isAtuh = true

  constructor() { }

  ngOnInit() {}

}
