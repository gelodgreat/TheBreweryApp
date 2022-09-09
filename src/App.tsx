import React from 'react';

import BreweryStack from './navigator/navigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from './redux/store';
import DrawerNavigation from 'navigator/drawer.nav';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from 'navigator/tab.nav';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
