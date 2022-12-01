import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurComponent } from './configur.component';

describe('ConfigurComponent', () => {
  let component: ConfigurComponent;
  let fixture: ComponentFixture<ConfigurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
