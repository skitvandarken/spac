import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiHalow } from './wifi-halow';

describe('WifiHalow', () => {
  let component: WifiHalow;
  let fixture: ComponentFixture<WifiHalow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WifiHalow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WifiHalow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
