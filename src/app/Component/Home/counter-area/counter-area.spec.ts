import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterArea } from './counter-area';

describe('CounterArea', () => {
  let component: CounterArea;
  let fixture: ComponentFixture<CounterArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
