import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListviewComponent } from './post-listview.component';

describe('PostListviewComponent', () => {
  let component: PostListviewComponent;
  let fixture: ComponentFixture<PostListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
