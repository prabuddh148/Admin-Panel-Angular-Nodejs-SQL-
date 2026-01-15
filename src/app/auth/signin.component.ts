import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../commonComponents/commonbutton';
import { AuthApiService } from '../api/auth.api.service';
import { Router } from '@angular/router';
import { ToastService } from '../commonComponents/toast.service';
import { ToastModule } from 'primeng/toast';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../commonComponents/loader/loader.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,
  imports: [FormsModule, ButtonComponent, ToastModule],
})
export class SigninComponent {
  email = signal('');
  password = signal('');

  constructor(
    private authApi: AuthApiService,
    private router: Router,
    private toast: ToastService,
    private loaderService: LoaderService
  ) {}

  onSubmit() {
    if (this.email() && this.password()) {
      this.loaderService.show();
      this.authApi
        .login(this.email(), this.password())
        .pipe(
          finalize(() => {
            this.loaderService.hide();
          })
        )
        .subscribe({
          next: (response) => {
            if (response && response?.statusCode === 200 && response?.success === true) {
              this.toast.show(response.message || 'Login successful!', 'success');
              this.router.navigate(['/admin']);
            } else {
              this.toast.show(response.message || 'Login failed!', 'error');
            }
          },
          error: (err) => {
            this.toast.show(err?.error?.message || 'An error occurred!', 'error');
          },
        });
    }
  }
}
