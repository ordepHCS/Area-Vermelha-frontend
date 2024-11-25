import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsIdComponent } from './complaints-id.component';

describe('ComplaintsIdComponent', () => {
  let component: ComplaintsIdComponent;
  let fixture: ComponentFixture<ComplaintsIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintsIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
