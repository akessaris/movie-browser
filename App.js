import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator, NavigationActions, createSwitchNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingsScreen from './screens/SettingsScreen'
import ModalScreen from './screens/ModalScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
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

const MainStack = createStackNavigator(
  {
    Main: HomeStack,
    MyModal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const SettingsStack = createStackNavigator ({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});

const AppContainer = createAppContainer(createBottomTabNavigator({
    Main: MainStack,
    Settings: SettingsStack,
}));

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
