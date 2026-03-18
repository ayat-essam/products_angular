import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincompontComponent } from './logincompont.component';

describe('LogincompontComponent', () => {
  let component: LogincompontComponent;
  let fixture: ComponentFixture<LogincompontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogincompontComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogincompontComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
