import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsAllComponent } from './complaints-all.component';

describe('ComplaintsAllComponent', () => {
  let component: ComplaintsAllComponent;
  let fixture: ComponentFixture<ComplaintsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
