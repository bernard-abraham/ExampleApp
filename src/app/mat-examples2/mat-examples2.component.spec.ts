import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExamples2Component } from './mat-examples2.component';

describe('MatExamples2Component', () => {
  let component: MatExamples2Component;
  let fixture: ComponentFixture<MatExamples2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatExamples2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatExamples2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
