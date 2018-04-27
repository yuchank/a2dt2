import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockProductComponent } from './mock-product.component';

describe('MockProductComponent', () => {
  let component: MockProductComponent;
  let fixture: ComponentFixture<MockProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
