import { InMemoryDbService } from 'angular-in-memory-web-api';

import { articles, stocks} from '../testing';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {articles, stocks};
  }
}