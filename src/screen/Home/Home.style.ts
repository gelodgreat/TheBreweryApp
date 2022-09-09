import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  flex: 1;
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
