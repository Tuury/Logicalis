import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaWorkflowComponent } from './plantilla-workflow.component';

describe('FrmValidationComponent', () => {
  let component: PlantillaWorkflowComponent;
  let fixture: ComponentFixture<PlantillaWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
