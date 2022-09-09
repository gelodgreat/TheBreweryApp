import React from 'react';
import {Container, ContentContainer, Row} from './Details.style';
import {DetailsProps} from './Details.props';
import {Text} from 'react-native-paper';
import {formatAddress} from 'utils/address';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailsScreen = (props: DetailsProps) => {
  const {details} = props;
  return (
    <Container>
      <ContentContainer>
        <Row>
          <Text> Name: {details.name}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          {/* <Icon name="heart" size={20} /> */}
          <Text style={{marginLeft: 8}}>
            Brewery Type{details.brewery_type}
          </Text>
        </Row>
        <Row style={{marginTop: 24}}>
          {/* <Icon name="download" size={20} /> */}
          <Text style={{marginLeft: 8}}>
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
        <Row style={{marginTop: 24}}>
          {/* <Icon name="eye" size={20} /> */}
          <Text style={{marginLeft: 8}}> Link: {details.website_url}</Text>
        </Row>
        <Row style={{marginTop: 24}}>
          {/* <Icon name="tags" size={20} /> */}
          <Text style={{marginLeft: 8}}>
            Updated Date: {details.updated_at}
          </Text>
        </Row>

        <Row style={{marginTop: 48}}></Row>
      </ContentContainer>
    </Container>
  );
};

export default DetailsScreen;
