/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, DataContainer, TextData} from './Home.style';
import {HomeProps} from './Home.props';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';
import {Brewery} from 'types/Brewery';
import {formatAddress} from 'utils/address';

const HomeScreen = (props: HomeProps) => {
  const {
    searchTerm,
    setSearchTerm,
    loading,
    onNavigateDetails,
    loadMore,
    breweries,
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
        style={{marginBottom: 8}}
      />
      {loading && <ActivityIndicator animating />}
      {breweries && (
        <FlashList
          data={breweries}
          renderItem={renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          estimatedItemSize={10}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
