import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from 'screen/Home/Home.container';
import DetailsContainer from 'screen/Details/Details.container';
import {DETAILS_SCREEN, HOME_SCREEN} from 'const/screens';

const Stack = createNativeStackNavigator();

const BreweryStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeContainer}
          options={{headerTitle: 'Home'}}
        />
        <Stack.Screen
          name={DETAILS_SCREEN}
          component={DetailsContainer}
          options={{headerTitle: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BreweryStack;
