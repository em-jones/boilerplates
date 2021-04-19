import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilComponentComponent } from './stencil-component.component';

describe('StencilComponentComponent', () => {
  let component: StencilComponentComponent;
  let fixture: ComponentFixture<StencilComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StencilComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
