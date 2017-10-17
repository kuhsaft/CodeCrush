import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsHeroComponent } from './tournaments-hero.component';

describe('TournamentsHeroComponent', () => {
  let component: TournamentsHeroComponent;
  let fixture: ComponentFixture<TournamentsHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
