import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavlayoutComponent } from './sidenavlayout.component';

describe('SidenavlayoutComponent', () => {
  let component: SidenavlayoutComponent;
  let fixture: ComponentFixture<SidenavlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
