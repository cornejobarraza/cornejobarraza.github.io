import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoBarComponent } from './dono-bar.component';

describe('DonoBarComponent', () => {
  let component: DonoBarComponent;
  let fixture: ComponentFixture<DonoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
