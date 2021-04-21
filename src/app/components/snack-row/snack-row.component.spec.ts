import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackRowComponent } from './snack-row.component';

describe('SnackRowComponent', () => {
  let component: SnackRowComponent;
  let fixture: ComponentFixture<SnackRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
