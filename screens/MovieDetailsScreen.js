import React from 'react';
import { StyleSheet, Text, Image, ScrollView, View, Linking, TouchableOpacity } from 'react-native';

import {fetchMovieDetails} from '../api';

export default class DetailsScreen extends React.Component {
	state = {
		movie: '',
	}

	static navigationOptions = ({navigation, navigationOptions}) => {
		return {
			title: navigation.getParam("title", 'N/A'),
			headerStyle: {
				backgroundColor: navigationOptions.headerTintColor,
			},
			headerTintColor: navigationOptions.headerStyle.backgroundColor,
		};
	}

	componentDidMount() {
		this.getMovieDetails(this.props.navigation.getParam('imdbID'));
	}

	getMovieDetails = async(movieID) => {
		try {
			const movieDetails = await fetchMovieDetails(movieID);
			this.setState({movie: movieDetails});
		}
		catch (e) {
			console.log(e);
		}
	}

	handleExternalLink = url => {
		Linking.openURL(url).catch(err => console.error('An error occurred', err));
	}

  	render() {
		const {navigationOptions} = this.props;
	    return (
	      	<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.poster}>
					<Image
						resizeMode="cover"
						source={{ uri: this.state.movie["Poster"] || 'N/A'}}
						style={styles.image}
					/>
				</View>
			<View style={styles.textContainer}>
				<Text style={styles.section}>About</Text>
				<Text style={styles.text}>Title: {this.state.movie["Title"] || 'N/A'}</Text>
				<Text style={styles.text}>Year: {this.state.movie["Year"] || 'N/A'} {'\t'}Rated: {this.state.movie["Rated"] || 'N/A'}</Text>
				<Text style={styles.text}>Runtime: {this.state.movie["Runtime"] || 'N/A'}</Text>
				<Text style={styles.text}>Genre: {this.state.movie["Genre"] || 'N/A'}</Text>
				<Text style={styles.text}>BoxOffice: {this.state.movie["BoxOffice"] || 'N/A'}</Text>
				<Text style={styles.text}>IMDb Rating: {this.state.movie["imdbRating"] || 'N/A'} {'\t'} Metascore: {this.state.movie["Metascore"] || 'N/A'}</Text>
				<TouchableOpacity 
					style={styles.button}
					onPress={() => this.handleExternalLink(`https://www.imdb.com/title/${this.state.movie["imdbID"]}`)}
					>
					<Text style={styles.buttonText}>IMDb Page</Text>
				</TouchableOpacity>
				<Text style={styles.section}>Plot</Text>
				<Text style={styles.plot}>{this.state.movie["Plot"] || 'N/A'}</Text>
			</View>
	      </ScrollView>
	    )
	}
}

const styles = StyleSheet.create({
  container: {
	backgroundColor: '#f4511e',
	alignItems: "center",
  },
  textContainer: {
	flex:1,
	marginBottom: 30,
  },
  section: {
	fontSize: 18,
	height: 35,
	fontWeight: "bold",
	textAlign: "center",
	alignSelf: "stretch",
	paddingTop: 5,
	color: "#f4511e",
	backgroundColor: "white",
  },
  text: {
	fontSize: 15,
	color: "white",
	padding: 13,
  },
  plot: {
	fontSize: 13,
	color: "white",
	padding: 13,
  },
  poster: {
	backgroundColor: "black", 
	alignSelf: 'stretch', 
	alignItems: "center",
  },
  image: {
    width: 300,
	height: 300,
	resizeMode:'contain',
  },
  button: {
	color: "#f4511e",
	backgroundColor: "white",
	marginRight:40,
    marginLeft:40,
	marginTop:10,
	marginBottom:25,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
    borderWidth: 1,
  },
  buttonText: {
	textAlign:'center',
	paddingLeft : 10,
	paddingRight : 10
  }
});