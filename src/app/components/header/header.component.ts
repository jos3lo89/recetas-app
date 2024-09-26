import { Component, OnInit } from '@angular/core';
import { IonHeader, IonAvatar, IonToolbar } from '@ionic/angular/standalone';
import { LogoComponent } from '../logo/logo.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { LogOutComponent } from "../log-out/log-out.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, IonAvatar, LogoComponent, UserMenuComponent, LogOutComponent],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
