import {Dispatch, SetStateAction} from 'react';
import {Bookmarks} from 'types/Bookmarks';
import {Brewery} from 'types/Brewery';

export interface HomePublicProps {}
export interface HomePrivateProps {
  breweries: Brewery[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  loading: boolean;
  onNavigateDetails: (details: Brewery) => void;
  loadMore: () => void;
  bookmarks: Bookmarks[];
  onBookmark: (bookmark: Bookmarks) => void;
}
export interface HomeProps extends HomePublicProps, HomePrivateProps {}
