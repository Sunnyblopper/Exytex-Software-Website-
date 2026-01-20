import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArea1 } from './choose-area1';

describe('ChooseArea1', () => {
  let component: ChooseArea1;
  let fixture: ComponentFixture<ChooseArea1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseArea1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseArea1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
