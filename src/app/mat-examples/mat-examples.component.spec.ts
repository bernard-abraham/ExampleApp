import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExamplesComponent } from './mat-examples.component';

describe('MatExamplesComponent', () => {
  let component: MatExamplesComponent;
  let fixture: ComponentFixture<MatExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
