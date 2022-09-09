/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, DataContainer, TextData} from './Home.style';
import {HomeProps} from './Home.props';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {Brewery} from 'types/Brewery';
import {formatAddress} from 'utils/address';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FlatList} from 'react-native';

const HomeScreen = (props: HomeProps) => {
  const {
    searchTerm,
    setSearchTerm,
    loading,
    onNavigateDetails,
    loadMore,
    breweries,
    bookmarks,
    onBookmark,
  } = props;

  const renderItem = ({item}: any) => {
    const itemData: Brewery = item;

    return (
      <DataContainer onPress={() => onNavigateDetails(itemData)}>
        <TextData>Name: {itemData.name}</TextData>
        <TextData>Brewery by: {itemData.brewery_type}</TextData>
        <TextData>
          Address:{' '}
          {formatAddress(itemData.street, itemData.city, itemData.state)}
        </TextData>
      </DataContainer>
    );
  };

  return (
    <Container>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search brewery..."
        mode="outlined"
        style={{
          marginBottom: 8,
          backgroundColor: 'white',
          borderRadius: 12,
          textDecorationLine: 'none',
        }}
      />
      {loading && <ActivityIndicator animating />}
      {breweries && (
        <FlatList
          keyExtractor={() => Math.random().toString()}
          data={breweries}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
