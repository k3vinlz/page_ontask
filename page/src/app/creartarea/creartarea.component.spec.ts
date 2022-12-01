import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartareaComponent } from './creartarea.component';

describe('CreartareaComponent', () => {
  let component: CreartareaComponent;
  let fixture: ComponentFixture<CreartareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreartareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
