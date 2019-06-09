import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import MoviesList from "../components/MoviesList";
import {fetchMovies} from '../api';

class LogoTitle extends React.Component {
  render() {
    return (
    	<Text style={{color:"white", fontWeight:"bold", fontSize: 25}}>Movie/TV Browser</Text>
    );
	}
}

export default class HomeScreen extends React.Component {
	state = {
		query: '',
		movies: '',
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.query !== prevState.query) {
			this.getMovies(this.state.query);
		}
	}

	getMovies = async(query) => {
		try {
			const movies = await fetchMovies(query);
			this.setState({movies});
		}
		catch (e) {
			console.log(e);
			return;
		}
	}

	handleSelectMovie = movie => {
		console.log(movie);
		this.props.navigation.navigate('Details', {
			title: movie["Title"],
			imdbID: movie['imdbID'],
		});
	}

	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: <LogoTitle />,
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.searchBox}
					placeholder="Search movies"
					value={this.state.query}
					onChangeText={(query) => this.setState({query})}
				/>
				{this.state.movies ? <MoviesList movies={this.state.movies} onSelectMovie={this.handleSelectMovie}/> : <Text style={styles.noResults}>No Results</Text>}
			</View>
		)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
	},
	searchBox: {
		height:50, 
		borderColor: 'gray', 
		borderWidth: 3,
		alignSelf: "stretch",
		textAlign: "center",
		padding: 10,
		margin:5,
	},
	noResults: {
		marginTop: 5,
		fontSize: 15,
	},
});