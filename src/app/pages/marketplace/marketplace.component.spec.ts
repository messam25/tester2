import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shopComponent } from './marketplace.component';

describe('shopComponent', () => {
  let component: shopComponent;
  let fixture: ComponentFixture<shopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(shopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
