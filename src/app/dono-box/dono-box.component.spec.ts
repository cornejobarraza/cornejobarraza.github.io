import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoBoxComponent } from './dono-box.component';

describe('DonoBoxComponent', () => {
  let component: DonoBoxComponent;
  let fixture: ComponentFixture<DonoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
