import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPendComponent } from './t-pend.component';

describe('TPendComponent', () => {
  let component: TPendComponent;
  let fixture: ComponentFixture<TPendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
