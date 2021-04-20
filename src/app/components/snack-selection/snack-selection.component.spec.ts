import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackSelectionComponent } from './snack-selection.component';

describe('SnackSelectionComponent', () => {
  let component: SnackSelectionComponent;
  let fixture: ComponentFixture<SnackSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
