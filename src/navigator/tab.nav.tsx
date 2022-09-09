import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOOKMARK_SCREEN, HOME_SCREEN, ROOT_SCREEN} from 'const/screens';
import BreweryStack from './navigator';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const newIcon = (route: string, focused: boolean) => {
  if (route === HOME_SCREEN) {
    if (focused) {
      return <Icon name="home" />;
    }
    return <Icon name="home" color={'grey'} />;
  }
  if (route === BOOKMARK_SCREEN) {
    if (focused) {
      return <Icon name="bookmark" />;
    }
    return <Icon name="bookmark" color={'grey'} />;
  }
  return <></>;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => newIcon(route.name, focused),
      })}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={BreweryStack}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Tab.Screen
        name={BOOKMARK_SCREEN}
        component={BreweryStack}
        options={{headerTitle: 'Bookmark'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
