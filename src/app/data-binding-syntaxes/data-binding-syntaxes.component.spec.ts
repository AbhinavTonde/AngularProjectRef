import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingSyntaxesComponent } from './data-binding-syntaxes.component';

describe('DataBindingSyntaxesComponent', () => {
  let component: DataBindingSyntaxesComponent;
  let fixture: ComponentFixture<DataBindingSyntaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataBindingSyntaxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingSyntaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
