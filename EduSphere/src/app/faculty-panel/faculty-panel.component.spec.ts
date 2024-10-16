import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPanelComponent } from './faculty-panel.component';

describe('FacultyPanelComponent', () => {
  let component: FacultyPanelComponent;
  let fixture: ComponentFixture<FacultyPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
