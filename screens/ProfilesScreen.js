import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';

export default class ProfilesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profiles Screen</Text>
        <Button 
          title="Home" 
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button 
          title="Back" 
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
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