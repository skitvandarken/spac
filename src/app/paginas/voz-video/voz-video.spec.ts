import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VozVideo } from './voz-video';

describe('VozVideo', () => {
  let component: VozVideo;
  let fixture: ComponentFixture<VozVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VozVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VozVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
