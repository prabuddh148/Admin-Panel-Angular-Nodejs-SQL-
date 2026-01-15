import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoaderComponent } from './commonComponents/loader/loader.component';
import { LoaderService } from './commonComponents/loader/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, LoaderComponent],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-admin-template');
  loading;

  constructor(private loaderService: LoaderService) {
    this.loading = this.loaderService.loading;
  }
}
