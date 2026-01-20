import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightArea } from './copyright-area';

describe('CopyrightArea', () => {
  let component: CopyrightArea;
  let fixture: ComponentFixture<CopyrightArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
