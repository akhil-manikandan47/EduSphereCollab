import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherDetailsComponent } from './add-teacher-details.component';

describe('AddTeacherDetailsComponent', () => {
  let component: AddTeacherDetailsComponent;
  let fixture: ComponentFixture<AddTeacherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeacherDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
