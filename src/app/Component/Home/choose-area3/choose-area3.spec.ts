import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArea3 } from './choose-area3';

describe('ChooseArea3', () => {
  let component: ChooseArea3;
  let fixture: ComponentFixture<ChooseArea3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseArea3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseArea3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
