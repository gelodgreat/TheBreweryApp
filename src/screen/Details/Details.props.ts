import {Bookmarks} from 'types/Bookmarks';
import {Brewery} from 'types/Brewery';

export interface DetailsPublicProps {}
export interface DetailsPrivateProps {
  details: Brewery;
  bookmarks: Bookmarks[];
  onBookmark: (bookmark: Bookmarks) => void;
}
export interface DetailsProps extends DetailsPublicProps, DetailsPrivateProps {}
