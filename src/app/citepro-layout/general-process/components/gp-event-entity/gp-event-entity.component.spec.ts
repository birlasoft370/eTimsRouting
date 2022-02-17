import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpEventEntityComponent } from './gp-event-entity.component';

describe('GpEventEntityComponent', () => {
  let component: GpEventEntityComponent;
  let fixture: ComponentFixture<GpEventEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpEventEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpEventEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
