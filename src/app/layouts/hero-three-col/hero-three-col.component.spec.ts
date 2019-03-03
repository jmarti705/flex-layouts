import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroThreeColComponent } from './hero-three-col.component';

describe('HeroThreeColComponent', () => {
  let component: HeroThreeColComponent;
  let fixture: ComponentFixture<HeroThreeColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroThreeColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroThreeColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
