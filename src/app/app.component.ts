import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './module/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoq3';
  loading$ = this.loader.loading$;

  constructor(private loader : LoaderService, private cdRef : ChangeDetectorRef){

  }

  ngAfterContentChecked() {
    this.loading$ = this.loader.loading$;
    this.cdRef.detectChanges();
  }
  
}
