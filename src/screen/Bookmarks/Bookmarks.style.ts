import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
`;

export const ContentContainer = styled.View`
  margin-top: 48px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
export const DataContainer = styled.TouchableOpacity`
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 8px 0px;
  flex-direction: column;
`;

export const TextData = styled(Text)`
  margin-bottom: 8px;
`;
