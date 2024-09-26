import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';
import { AuthStateService } from 'src/app/shared/data-access/auth-state.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class LogOutComponent implements OnInit {
  private _authState = inject(AuthStateService);
  private _router = inject(Router);
  private _toast = inject(ToastController);

  constructor() {}

  ngOnInit() {}

  async logOut() {
    try {
      await this._authState.logOut();

      this._router.navigateByUrl('/pages/home');

      const toast = await this._toast.create({
        message: 'Cerraste sesión con exito',
        duration: 1500,
        position: 'bottom',
        color: 'primary',
      });

      await toast.present();
    } catch (error) {
      console.log(error);

      const toast = await this._toast.create({
        message: 'Ocurrio un error',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
