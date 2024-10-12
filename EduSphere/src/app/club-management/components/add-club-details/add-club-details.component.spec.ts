import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClubDetailsComponent } from './add-club-details.component';

describe('AddClubDetailsComponent', () => {
  let component: AddClubDetailsComponent;
  let fixture: ComponentFixture<AddClubDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClubDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddClubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
