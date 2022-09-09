import {Bookmarks} from 'types/Bookmarks';

export interface BookmarksPublicProps {}
export interface BookmarksPrivateProps {
  bookmarks: Bookmarks[];
  onBookmark: (bookmark: Bookmarks) => void;
}
export interface BookmarksProps
  extends BookmarksPublicProps,
    BookmarksPrivateProps {}
