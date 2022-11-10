import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading$ = this.loader.loading$;
  constructor(public loader: LoaderService, private cdRef : ChangeDetectorRef) {}
   ngOnInit(): void {
   
  }
  
  ngAfterViewInit() {
    this.loading$ = this.loader.loading$;
    this.cdRef.detectChanges();
  }
}
