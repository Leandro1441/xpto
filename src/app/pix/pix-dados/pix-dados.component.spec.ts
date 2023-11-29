import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixDadosComponent } from './pix-dados.component';

describe('PixDadosComponent', () => {
  let component: PixDadosComponent;
  let fixture: ComponentFixture<PixDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixDadosComponent]
    });
    fixture = TestBed.createComponent(PixDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
