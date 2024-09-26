import { Component, inject, OnInit } from '@angular/core';
import { IonInput, IonButton, IonToast, IonContent } from '@ionic/angular/standalone';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [IonContent,
    IonToast,
    IonButton,
    IonInput,
    ReactiveFormsModule,
    GoogleButtonComponent,
  ],
})
export default class SignUpComponent implements OnInit {
  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  private _authService = inject(AuthService);

  private _formBuild = inject(FormBuilder);
  private _router = inject(Router);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  isEmailRequired() {
    return hasEmailError(this.form);
  }

  form = this._formBuild.group<FormSignUp>({
    email: this._formBuild.control('', [Validators.required, Validators.email]),
    password: this._formBuild.control('', Validators.required),
  });

  async submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    if (!email || !password) return;

    console.log({ email, password });

    try {
      await this._authService.signUp({
        email,
        password,
      });

      this.presenteToast('usuario creado correctamente');
      this._router.navigateByUrl('/pages/home');
    } catch (error) {
      console.log(error);

      this.presenteToast('Ocurrio un error');
    }
  }

  async presenteToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      await this.presenteToast('Bienvenido de nuevo');
      await this._router.navigateByUrl('/pages/home');
    } catch (error) {
      console.error('Google sign-in error:', error);
      await this.presenteToast('Ocurrió un error');
    }
  }
}
