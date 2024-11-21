import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninEditComponent } from './signin-edit.component';

describe('SigninEditComponent', () => {
  let component: SigninEditComponent;
  let fixture: ComponentFixture<SigninEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
