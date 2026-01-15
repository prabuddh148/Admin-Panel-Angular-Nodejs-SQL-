import { Component, input, computed } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  type = input<'button' | 'submit' | 'reset'>('button');
  className = input('');
  disabled = input(false);

  getClassName = computed(() => `app-btn${this.className() ? ' ' + this.className() : ''}`);
}
