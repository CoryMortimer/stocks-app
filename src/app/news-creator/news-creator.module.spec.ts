import { NewsCreatorModule } from './news-creator.module';

describe('NewsCreatorModule', () => {
  let newsCreatorModule: NewsCreatorModule;

  beforeEach(() => {
    newsCreatorModule = new NewsCreatorModule();
  });

  it('should create an instance', () => {
    expect(newsCreatorModule).toBeTruthy();
  });
});
