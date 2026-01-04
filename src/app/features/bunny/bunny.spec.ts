import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bunny } from './bunny';

describe('Bunny', () => {
  let component: Bunny;
  let fixture: ComponentFixture<Bunny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bunny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bunny);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
