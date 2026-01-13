import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../commonComponents/loader/loader.component';
import { ButtonComponent } from '../commonComponents/commonbutton';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  standalone: true,
  imports: [FormsModule, LoaderComponent, ButtonComponent],
})
export class SigninComponent {
  loading = false;
  email = '';
  password = '';

  onSubmit() {
    if (this.email && this.password) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        // Handle login logic here
      }, 2000);
    }
  }
}
