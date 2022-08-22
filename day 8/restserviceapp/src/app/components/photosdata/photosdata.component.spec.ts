import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosdataComponent } from './photosdata.component';

describe('PhotosdataComponent', () => {
  let component: PhotosdataComponent;
  let fixture: ComponentFixture<PhotosdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
