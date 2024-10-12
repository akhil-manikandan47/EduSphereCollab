import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookEditComponent } from './gradebook-edit.component';

describe('GradebookEditComponent', () => {
  let component: GradebookEditComponent;
  let fixture: ComponentFixture<GradebookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradebookEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradebookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
