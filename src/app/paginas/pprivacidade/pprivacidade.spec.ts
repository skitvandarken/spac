import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pprivacidade } from './pprivacidade';

describe('Pprivacidade', () => {
  let component: Pprivacidade;
  let fixture: ComponentFixture<Pprivacidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pprivacidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pprivacidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
