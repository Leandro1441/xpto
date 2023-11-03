import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pixTipoComponent } from './pix-tipo.component';

describe('TipoPixComponent', () => {
  let component: pixTipoComponent;
  let fixture: ComponentFixture<pixTipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [pixTipoComponent]
    });
    fixture = TestBed.createComponent(pixTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
