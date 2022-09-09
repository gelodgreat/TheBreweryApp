import {Bookmarks} from './Bookmarks';
import {Brewery} from './Brewery';

export interface Store {
  detail: {detailsId: string | number};
  brewery: {breweries: Brewery[]};
  bookmarks: {bookmarks: Bookmarks[]};
}
