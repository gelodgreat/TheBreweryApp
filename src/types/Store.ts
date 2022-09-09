import {Brewery} from './Brewery';

export interface Store {
  detail: {detailsId: string | number};
  brewery: {breweries: Brewery[]};
}
