import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/module/shared/services/sidenav.service';

@Component({
  selector: 'app-sidenavlayout',
  templateUrl: './sidenavlayout.component.html',
  styleUrls: ['./sidenavlayout.component.css']
})
export class SidenavlayoutComponent implements OnInit {
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