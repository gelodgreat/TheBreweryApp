import React, {useEffect, useState} from 'react';
import HomeScreen from './Home.view';
import {useDispatch, useSelector} from 'react-redux';
import {
  addBookmarks,
  clearBreweryList,
  currentBrewery,
  loadBreweries,
} from 'redux/actions';
import {useNavigation} from '@react-navigation/native';
import {Store} from 'types/Store';
import {DETAILS_SCREEN} from 'const/screens';
import {HomePrivateProps} from './Home.props';
import {Brewery} from 'types/Brewery';
import {Bookmarks} from 'types/Bookmarks';

const HomeContainer = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(10);

  const breweries =
    useSelector((state: Store) => state.brewery.breweries) || [];

  const bookmarks =
    useSelector((state: Store) => state.bookmarks.bookmarks) || [];

  const onNavigateDetails = (details: Brewery) => {
    dispatch(currentBrewery(details.id));
    navigation.navigate(DETAILS_SCREEN, {screen: DETAILS_SCREEN});
  };

  const getBreweryResult = async () => {
    try {
      dispatch(clearBreweryList());
      setLoading(true);
      dispatch(loadBreweries(searchTerm, 10));
      setLoading(false);
    } catch (error) {
      console.log({error});
    }
  };

  const onBookmark = (bookmark: Bookmarks) => {
    dispatch(addBookmarks(bookmark));
  };

  const loadMore = async () => {
    setLoading(true);
    setPage(page + 10);
    dispatch(loadBreweries(searchTerm, page + 10));
    setLoading(false);
  };

  useEffect(() => {
    dispatch(clearBreweryList());
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    const timerId = setTimeout(() => {
      getBreweryResult();
    }, 800);

    setTimer(timerId);
  }, [searchTerm]);

  const generatedProps: HomePrivateProps = {
    breweries,
    searchTerm,
    setSearchTerm,
    loading,
    onNavigateDetails,
    loadMore,
    onBookmark,
    bookmarks,
  };

  return <HomeScreen {...generatedProps} {...props} />;
};
export default HomeContainer;
