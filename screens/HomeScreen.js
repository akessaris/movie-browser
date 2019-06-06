import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
    	<Text>Home</Text>
    );
	}
}

export default class HomeScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		const params = navigation.state.params || {};

		return {
			headerLeft:(
				<Button
					onPress={() => navigation.navigate('MyModal')}
					title="Info"
					color="#fff"
				/>
			),
			headerTitle: <LogoTitle />,
			headerRight: (
				<Button
					onPress={navigation.getParam('increaseCount')}
					title="+1"
					color="#fff"
				/>
			),
		}
	}

	componentDidMount() {
		this.props.navigation.setParams({increaseCount: this._increaseCount});
	}

	state = {
		count: 0,
	}

	_increaseCount = () => {
		this.setState({count: this.state.count+1})
	}

  	render() {
	    return (
	      <View style={styles.container}>
	        <Text>Home Screen</Text>
					<Text>Count: {this.state.count}</Text>
	        <Button 
	        	title="Details" 
	        	onPress={() => {
	          		this.props.navigation.navigate("Details", {
		          		itemId: 86,
		          		otherParam: 'waka waka',
	          		});
	        	}}
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