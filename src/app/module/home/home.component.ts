import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../shared/services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  options: FormGroup;

  constructor(fb: FormBuilder, private sidenavService: SidenavService) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }


}
