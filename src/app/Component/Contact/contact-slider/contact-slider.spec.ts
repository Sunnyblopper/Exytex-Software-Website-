import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSlider } from './contact-slider';

describe('ContactSlider', () => {
  let component: ContactSlider;
  let fixture: ComponentFixture<ContactSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
