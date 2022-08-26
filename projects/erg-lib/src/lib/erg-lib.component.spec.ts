import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgLibComponent } from './erg-lib.component';

describe('ErgLibComponent', () => {
  let component: ErgLibComponent;
  let fixture: ComponentFixture<ErgLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
