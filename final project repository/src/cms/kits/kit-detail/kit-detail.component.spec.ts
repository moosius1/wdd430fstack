import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDetailComponent } from './kit-detail.component';

describe('KitDetailComponent', () => {
  let component: KitDetailComponent;
  let fixture: ComponentFixture<KitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
