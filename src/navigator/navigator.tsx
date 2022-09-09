import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeContainer from 'screen/Home/Home.container';
import DetailsContainer from 'screen/Details/Details.container';
import {DETAILS_SCREEN, HOME_SCREEN} from 'const/screens';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const BreweryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeContainer}
        options={{headerTitle: 'Home'}}
      />
      <Stack.Screen
        name={DETAILS_SCREEN}
        component={DetailsContainer}
        options={({navigation, route}) => ({
          headerTitle: 'Details',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default BreweryStack;
