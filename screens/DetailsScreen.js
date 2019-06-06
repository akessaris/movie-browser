import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
	static navigationOptions = ({navigation, navigationOptions}) => {
		return {
			title: navigation.getParam('otherParam', 'A Nested Details Screen'),
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor,
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor,
		};
	}

  	render() {
	  	const {navigation} = this.props;
	  	const itemId = navigation.getParam('itemId', 'NO-ID');
	  	const otherParam = navigation.getParam('otherParam', 'some default value');

	    return (
	      <View style={styles.container}>
	        <Text>Details Screen</Text>
	        <Text>itemId: {JSON.stringify(itemId)}</Text>
	        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

	        <Button 
	          title="Home" 
	          onPress={() => this.props.navigation.navigate("Home")}
	        />
	        <Button 
	          title="Back" 
	          onPress={() => this.props.navigation.goBack()}
	        />
	        <Button 
	          title="Details...again" 
	          onPress={() =>
	          	this.props.navigation.push("Details", {
		          itemId: Math.floor(Math.random() * 100),
	          })}
	        />
	        <Button
	        	title="Update Title"
	        	onPress={() => this.props.navigation.setParams({otherParam: "Updated!"})}
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