import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixContatosComponent } from './pix-contatos.component';

describe('PixContatosComponent', () => {
  let component: PixContatosComponent;
  let fixture: ComponentFixture<PixContatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixContatosComponent]
    });
    fixture = TestBed.createComponent(PixContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
