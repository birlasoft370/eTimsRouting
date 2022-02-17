import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProcessComponent } from './general-process.component';

describe('GeneralProcessComponent', () => {
  let component: GeneralProcessComponent;
  let fixture: ComponentFixture<GeneralProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
