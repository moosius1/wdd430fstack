import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitEditComponent } from './kit-edit.component';

describe('KitEditComponent', () => {
  let component: KitEditComponent;
  let fixture: ComponentFixture<KitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
