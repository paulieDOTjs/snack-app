import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackTableComponent } from './snack-table.component';

describe('SnackTableComponent', () => {
  let component: SnackTableComponent;
  let fixture: ComponentFixture<SnackTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
