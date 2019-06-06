import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
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