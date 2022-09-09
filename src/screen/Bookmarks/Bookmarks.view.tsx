/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  ContentContainer,
  DataContainer,
  Row,
  TextData,
} from './Bookmarks.style';
import {BookmarksProps} from './Bookmarks.props';
import {Text} from 'react-native-paper';
import {formatAddress} from 'utils/address';
import {FlatList, Linking, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import {Bookmarks} from 'types/Bookmarks';
import {Brewery} from 'types/Brewery';

const BookmarksScreen = (props: BookmarksProps) => {
  const {bookmarks, onBookmark} = props;
  const renderItem = ({item}: any) => {
    const itemData: Brewery = item;

    return (
      <DataContainer onPress={() => {}}>
        <TextData>Name: {itemData.name}</TextData>
        <TextData>Brewery by: {itemData.brewery_type}</TextData>
        <TextData>
          Address:{' '}
          {formatAddress(itemData.street, itemData.city, itemData.state)}
        </TextData>
        <TouchableOpacity
          onPress={() => onBookmark(item)}
          style={{
            marginTop: 12,
            marginRight: 12,
            justifyContent: 'flex-end',
            alignSelf: 'flex-end',
          }}>
          {bookmarks.find(i => i.id === itemData.id) ? (
            <Icon name="bookmark" color="blue" size={20} />
          ) : (
            <Icon name="bookmark" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </DataContainer>
    );
  };

  return (
    <Container>
      <ContentContainer>
        <Text style={{fontSize: 24}}>Bookmarks: {bookmarks.length || 0}</Text>
        {bookmarks.length > 0 ? (
          <FlatList
            data={bookmarks}
            renderItem={renderItem}
            onEndReachedThreshold={0.5}
          />
        ) : (
          <View>
            <Text>You don't have any bookmarks</Text>
          </View>
        )}
      </ContentContainer>
      <Toast />
    </Container>
  );
};

export default BookmarksScreen;
