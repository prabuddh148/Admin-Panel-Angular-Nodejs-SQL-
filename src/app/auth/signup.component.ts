import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../commonComponents/loader/loader.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [LoaderComponent, FormsModule],
})
export class SignupComponent {
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  loading = signal(false);
}
