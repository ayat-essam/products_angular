import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponetComponent } from './add-product-componet.component';

describe('AddProductComponetComponent', () => {
  let component: AddProductComponetComponent;
  let fixture: ComponentFixture<AddProductComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductComponetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductComponetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
