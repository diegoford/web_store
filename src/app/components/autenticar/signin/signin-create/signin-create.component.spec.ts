import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninCreateComponent } from './signin-create.component';

describe('SigninCreateComponent', () => {
  let component: SigninCreateComponent;
  let fixture: ComponentFixture<SigninCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
