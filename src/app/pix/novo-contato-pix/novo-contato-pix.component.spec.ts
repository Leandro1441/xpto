import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoContatoPixComponent } from './novo-contato-pix.component';

describe('NovoContatoPixComponent', () => {
  let component: NovoContatoPixComponent;
  let fixture: ComponentFixture<NovoContatoPixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoContatoPixComponent]
    });
    fixture = TestBed.createComponent(NovoContatoPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
