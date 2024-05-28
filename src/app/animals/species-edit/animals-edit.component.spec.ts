import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsEditComponent } from './animals-edit.component';

describe('SpeciesEditComponent', () => {
  let component: AnimalsEditComponent;
  let fixture: ComponentFixture<AnimalsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
