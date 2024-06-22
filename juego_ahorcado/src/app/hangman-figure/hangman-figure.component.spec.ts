import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanFigureComponent } from './hangman-figure.component';

describe('HangmanFigureComponent', () => {
  let component: HangmanFigureComponent;
  let fixture: ComponentFixture<HangmanFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HangmanFigureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HangmanFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
