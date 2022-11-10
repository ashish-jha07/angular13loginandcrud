import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditactivityComponent } from './add-editactivity.component';

describe('AddEditactivityComponent', () => {
  let component: AddEditactivityComponent;
  let fixture: ComponentFixture<AddEditactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
