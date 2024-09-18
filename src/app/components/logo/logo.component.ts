import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonAvatar} from "@ionic/angular/standalone"

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [IonAvatar, RouterLink]
})
export class LogoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
