import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conectividade } from './conectividade';

describe('Conectividade', () => {
  let component: Conectividade;
  let fixture: ComponentFixture<Conectividade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conectividade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conectividade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
