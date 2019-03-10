import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingDialogComponent } from './add-parking-dialog.component';

describe('AddParkingDialogComponent', () => {
  let component: AddParkingDialogComponent;
  let fixture: ComponentFixture<AddParkingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
