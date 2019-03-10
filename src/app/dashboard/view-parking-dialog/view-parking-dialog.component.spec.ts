import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParkingDialogComponent } from './view-parking-dialog.component';

describe('ViewParkingDialogComponent', () => {
  let component: ViewParkingDialogComponent;
  let fixture: ComponentFixture<ViewParkingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParkingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParkingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
