/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, ContentContainer, Row} from './Details.style';
import {DetailsProps} from './Details.props';
import {Text} from 'react-native-paper';
import {formatAddress} from 'utils/address';
import {Linking, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import moment from 'moment';

const DetailsScreen = (props: DetailsProps) => {
  const {details, bookmarks, onBookmark} = props;

  return (
    <Container>
      <ContentContainer>
        <Row>
          <Text> Name: {details.name}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          <Text>Brewery Type{details.brewery_type}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          <Text>
            Address:{' '}
            {formatAddress(
              details.street,
              details.city,
              details.state,
              details.postal_code,
              details.country,
            )}
          </Text>
        </Row>
        {details.website_url && (
          <Row style={{marginTop: 24}}>
            <TouchableOpacity
              onPress={() => Linking.openURL(details?.website_url)}>
              <Text> Link: {details.website_url}</Text>
            </TouchableOpacity>
          </Row>
        )}

        <Row style={{marginTop: 24}}>
          <Text>
            Updated Date:{' '}
            {moment(new Date(details.updated_at)).format('MMM, DD YYYY')}
          </Text>
        </Row>

        <Row style={{marginTop: 24}}>
          <Text style={{marginRight: 8}}>Save this now: </Text>
          <TouchableOpacity onPress={() => onBookmark(details)}>
            {bookmarks.find(i => i.id === details.id) ? (
              <Icon name="bookmark" color="blue" size={18} />
            ) : (
              <Icon name="bookmark" color="grey" size={18} />
            )}
          </TouchableOpacity>
        </Row>

        <Row style={{marginTop: 48}} />
      </ContentContainer>
      <Toast />
    </Container>
  );
};

export default DetailsScreen;
