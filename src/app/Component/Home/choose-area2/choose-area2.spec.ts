import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArea2 } from './choose-area2';

describe('ChooseArea2', () => {
  let component: ChooseArea2;
  let fixture: ComponentFixture<ChooseArea2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseArea2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseArea2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
