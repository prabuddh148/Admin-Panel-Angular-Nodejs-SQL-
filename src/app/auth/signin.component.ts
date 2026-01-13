import { Component } from '@angular/core';
import { ButtonComponent } from '../commonComponents/commonbutton/button.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {}
