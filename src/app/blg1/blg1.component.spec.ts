import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blg1Component } from './blg1.component';

describe('Blg1Component', () => {
  let component: Blg1Component;
  let fixture: ComponentFixture<Blg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blg1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
