import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';

import { ArticlesModule } from './articles.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesService } from './articles.service';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;
  let testArticles;
  let articlesService;

  function getArticles() {
    return fixture.nativeElement.querySelectorAll('mat-list-item');
  }

  function getTitleAndAuthor(article) {
    const titleElement = article.querySelector('h3');
    const authorElement = article.querySelector('p');
    return {titleElement, authorElement};
  }

  beforeEach(async(() => {
    testArticles = {
      articles: [
        {
          title: 'Stock market is up',
          author: 'MSNBC',
          content: 'content'
        }
      ]
    };
    articlesService = jasmine.createSpyObj('ArticlesService', ['getArticles']);
    articlesService.getArticles.and.returnValue(of(testArticles));

    TestBed.configureTestingModule({
      imports: [ArticlesModule],
      providers: [
        {provide: ArticlesService, useValue: articlesService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy('component was not created');
  });

  it('should display the single news source', () => {
    fixture.detectChanges();
    const articles = getArticles();
    expect(articles.length).toBe(1, `Articles length is not 1; it is ${articles.length}`);
    const {titleElement, authorElement} = getTitleAndAuthor(articles[0]);
    const {title, author} = testArticles.articles[0];
    expect(titleElement.innerText).toBe(title, `Title incorrectly is ${titleElement.innerText}`);
    expect(authorElement.innerText).toBe(author, `Author incorrectly is ${authorElement.innerText}`);
  });

  it('should display nothing when maxArticles is 0', () => {
    component.maxArticles = 0;
    fixture.detectChanges();
    const articles = getArticles();
    expect(articles.length).toBe(0, `Articles length is not 0; it is ${articles.length}`);
  });

  it('should display nothing when the service returns an empty object', () => {
    articlesService.getArticles.and.returnValue(of({}));
    fixture.detectChanges();
    const articles = getArticles();
    expect(articles.length).toBe(0, `Articles length is not 0; it is ${articles.length}`);
  });
});
