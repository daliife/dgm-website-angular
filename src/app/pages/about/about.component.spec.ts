import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should toggle class in element list when clicked ', () => {
    spyOn(component, 'onClickToggle');

    const compiled = fixture.nativeElement;
    const liSelector = compiled.querySelector('ul').querySelector('li').querySelector('.collapsible-body');
    // expect(liSelector.className).toEqual('collapsible-body row');

    //TODO: CLICK NOT WORKING
    liSelector.click();
    fixture.detectChanges();

    expect(component.onClickToggle).toHaveBeenCalled();
    expect(liSelector).toHaveClass('collapsible-header--shown');
  });
});
