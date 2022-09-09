import React from 'react';

import BreweryStack from './navigator/navigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <BreweryStack />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
