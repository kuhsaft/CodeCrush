import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsHeroComponent } from './problems-hero.component';

describe('ProblemsHeroComponent', () => {
  let component: ProblemsHeroComponent;
  let fixture: ComponentFixture<ProblemsHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
