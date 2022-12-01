import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NUsuarioComponent } from './n-usuario.component';

describe('NUsuarioComponent', () => {
  let component: NUsuarioComponent;
  let fixture: ComponentFixture<NUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
