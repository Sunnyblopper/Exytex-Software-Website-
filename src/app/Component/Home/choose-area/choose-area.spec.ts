import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArea } from './choose-area';

describe('ChooseArea', () => {
  let component: ChooseArea;
  let fixture: ComponentFixture<ChooseArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
