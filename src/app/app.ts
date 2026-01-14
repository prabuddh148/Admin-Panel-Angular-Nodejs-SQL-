import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoaderComponent } from './commonComponents/loader/loader.component';
import { LoaderService } from './commonComponents/loader/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, LoaderComponent],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  loading = false;
  private loaderSub?: Subscription;
  protected readonly title = signal('angular-admin-template');

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderSub = this.loaderService.loading$.subscribe((val) => {
      this.loading = val;
    });
  }

  ngOnDestroy() {
    this.loaderSub?.unsubscribe();
  }
}
