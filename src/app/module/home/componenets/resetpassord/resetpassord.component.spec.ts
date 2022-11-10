import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpassordComponent } from './resetpassord.component';

describe('ResetpassordComponent', () => {
  let component: ResetpassordComponent;
  let fixture: ComponentFixture<ResetpassordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpassordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetpassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
