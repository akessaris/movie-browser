import React from 'react'
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    row:  {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: 'black',
        padding: 5,
        margin: 3,
        fontSize: 10,
        backgroundColor: "yellow",
        flexWrap: 'wrap',

    },
    text: {
      fontWeight: "bold",
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    textContainer: {
      justifyContent: "center",
    }
})

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectMovie(props)}>
    <Image
      resizeMode="center"
      source={{ uri: props.Poster}}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{props.Title}</Text>
      <Text style={styles.text}>({props.Year})</Text>
    </View>
  </TouchableOpacity>
)

Row.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
}

export default Row
