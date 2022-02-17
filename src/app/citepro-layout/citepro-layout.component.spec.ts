import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiteproLayoutComponent } from './citepro-layout.component';

describe('CiteproLayoutComponent', () => {
  let component: CiteproLayoutComponent;
  let fixture: ComponentFixture<CiteproLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiteproLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiteproLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
