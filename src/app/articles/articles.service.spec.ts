import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service: ArticlesService;
  let httpMock: HttpTestingController;
  let testArticles;

  beforeEach(() => {
    testArticles = {
      articles: [
        {
          title: 'Stock market is up',
          author: 'MSNBC',
          content: 'content'
        }
      ]
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticlesService]
    });
  });

  beforeEach(inject([ArticlesService, HttpTestingController], (articlesService: ArticlesService, httpTesting: HttpTestingController) => {
    service = articlesService;
    httpMock = httpTesting;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of articles', () => {
    service.getArticles()
      .subscribe(
        articles => {
          expect(articles).toBe(testArticles, `Incorrectly returned object ${articles}`);
        }
      );
    const request = httpMock.expectOne('api/articles');
    expect(request.request.method).toBe('GET');
    request.flush(testArticles);
  });

  it('should return an empty object on error', () => {
    service.getArticles()
      .subscribe(
        articles => {
          expect(articles).toEqual({} as {articles: Object[]}, `Incorrectly returned object ${articles}`);
        }
      );
    const request = httpMock.expectOne('api/articles');
    expect(request.request.method).toBe('GET');
    request.flush(null, {status: 400, statusText: 'Bad Request'});
  });
});
