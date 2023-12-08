import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFComponent } from './model-driven-f.component';

describe('ModelDrivenFComponent', () => {
  let component: ModelDrivenFComponent;
  let fixture: ComponentFixture<ModelDrivenFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelDrivenFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelDrivenFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
