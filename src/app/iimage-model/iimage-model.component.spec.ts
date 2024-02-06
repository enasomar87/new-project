import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IimageModelComponent } from './iimage-model.component';

describe('IimageModelComponent', () => {
  let component: IimageModelComponent;
  let fixture: ComponentFixture<IimageModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IimageModelComponent]
    });
    fixture = TestBed.createComponent(IimageModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
