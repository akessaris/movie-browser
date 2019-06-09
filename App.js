import React from 'react';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, NavigationActions, createSwitchNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: MovieDetailsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: "Back"
    },
  }
);

const AppContainer = createAppContainer(HomeStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}