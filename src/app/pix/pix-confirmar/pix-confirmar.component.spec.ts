import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixConfirmarComponent } from './pix-confirmar.component';

describe('ConfirmarPixComponent', () => {
  let component: PixConfirmarComponent;
  let fixture: ComponentFixture<PixConfirmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixConfirmarComponent]
    });
    fixture = TestBed.createComponent(PixConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
