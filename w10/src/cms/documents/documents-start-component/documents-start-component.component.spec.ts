import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsStartComponentComponent } from './documents-start-component.component';

describe('DocumentsStartComponentComponent', () => {
  let component: DocumentsStartComponentComponent;
  let fixture: ComponentFixture<DocumentsStartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsStartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsStartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
