import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateQrComponent } from './plate-qr.component';

describe('PlateQrComponent', () => {
  let component: PlateQrComponent;
  let fixture: ComponentFixture<PlateQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
