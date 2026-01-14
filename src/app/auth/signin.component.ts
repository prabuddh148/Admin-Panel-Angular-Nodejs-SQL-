import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../commonComponents/loader/loader.component';
import { ButtonComponent } from '../commonComponents/commonbutton';
import { AuthApiService } from '../api/auth.api.service';
import { Router } from '@angular/router';
import { ToastService } from '../commonComponents/toast.service';
import { ToastModule } from 'primeng/toast';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,
  imports: [FormsModule, LoaderComponent, ButtonComponent, ToastModule],
})
export class SigninComponent {
  loading = false;
  email = '';
  password = '';

  constructor(
    private authApi: AuthApiService,
    private router: Router,
    private toast: ToastService
  ) {}

  onSubmit() {
    if (this.email && this.password) {
      this.loading = true;
      console.log('loading (before API call):', this.loading);
      this.authApi
        .login(this.email, this.password)
        .pipe(
          finalize(() => {
            this.loading = false;
            console.log('loading (in finalize):', this.loading);
          })
        )
        .subscribe({
          next: (response) => {
            console.log('loading (in next):', this.loading);
            console.log('Hii');
            console.log('response', response);
            console.log('response Status', response?.statusCode);

            if (response && response?.statusCode === 200 && response?.success === true) {
              this.toast.show(response.message || 'Login successful!', 'success');
              // this.router.navigate(['/admin']);
            } else {
              console.log('Hererererere', response);
              this.toast.show(response.message || 'Login failed!', 'error');
            }
          },
          error: (err) => {
            console.log('loading (in error):', this.loading);
            this.toast.show(err?.error?.message || 'An error occurred!', 'error');
          },
        });
    }
  }
}
