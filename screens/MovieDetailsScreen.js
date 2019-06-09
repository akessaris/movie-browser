import React from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';

export default class DetailsScreen extends React.Component {
	static navigationOptions = ({navigation, navigationOptions}) => {
		return {
			title: navigation.getParam("title", 'Unnamed'),
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor,
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor,
		};
	}
  	render() {
		const {navigation} = this.props;
		const title = navigation.getParam('title', '');
		const posterURI = navigation.getParam('poster', '');
		const type = navigation.getParam('type', '');
	  	const year = navigation.getParam('year', '');
	  	const imdbId = navigation.getParam('imdbId', '');

	    return (
	      <ScrollView contentContainerStyle={styles.container}>
			<Image
				resizeMode="cover"
				source={{ uri: posterURI}}
				style={styles.image}
          	/>
	        <Text>Year: {year}</Text>
	      </ScrollView>
	    )
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#f4511e',
	alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
	marginBottom: 50,
	borderColor: "yellow",
	borderWidth: 3,
  },
});