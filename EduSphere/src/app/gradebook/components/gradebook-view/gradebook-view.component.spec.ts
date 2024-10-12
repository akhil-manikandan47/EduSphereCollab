import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookViewComponent } from './gradebook-view.component';

describe('GradebookViewComponent', () => {
  let component: GradebookViewComponent;
  let fixture: ComponentFixture<GradebookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradebookViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradebookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
