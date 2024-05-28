import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsDetailsComponent } from './animals-details.component';

describe('SpeciesDetailsComponent', () => {
  let component: AnimalsDetailsComponent;
  let fixture: ComponentFixture<AnimalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
