import React,  { Component }  from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { connect } from "react-redux";
import { addDeck } from '../actions';
import {submitDeck} from '../utils/api'
import SubmitBtn from './submitBtn'
import {async_key, getData} from '../utils/api'

class Decks extends Component {
  componentDidMount(){
    this.props.dispatch(getData())
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.decks)}</Text>
        {/* {Object.keys(this.props.decks[async_key]).map(deck =>{
          return (
            <Text>{deck}</Text>
          )
        })} */}
        
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

function mapStateToProps ({decks}) {
  // const key = timeToString()

  return {
    decks
  }
}

export default connect(mapStateToProps)(Decks)