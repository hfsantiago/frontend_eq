import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIndicatorsComponent } from './add-edit-indicators.component';

describe('AddEditIndicatorsComponent', () => {
  let component: AddEditIndicatorsComponent;
  let fixture: ComponentFixture<AddEditIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditIndicatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
