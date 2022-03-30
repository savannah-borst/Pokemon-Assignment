import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCollectionComponent } from './trainer-collection.component';

describe('TrainerCollectionComponent', () => {
  let component: TrainerCollectionComponent;
  let fixture: ComponentFixture<TrainerCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
