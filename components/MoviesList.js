import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const MoviesList = props => (
  <FlatList 
    style={styles.list} 
    renderItem={({item}) => <Row {...item} onSelectMovie={props.onSelectMovie}/>}
    data={props.movies}
   />
);

MoviesList.propTypes = {
  movies: PropTypes.String,
}

const styles = StyleSheet.create({
  list: {
    alignSelf: "stretch",
    textAlign: 'center',
  }
})

export default MoviesList
