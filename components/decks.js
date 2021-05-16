import React,  { Component }  from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from "react-redux";
import SubmitBtn from './submitBtn'
import {getData} from '../utils/api'

class Decks extends Component {
  // componentDidMount(){
  //   this.props.dispatch(getData())
  // }
  toDeck = (name) => {
    console.log(this.props.navigation)
    this.props.navigation.dispatch(CommonActions.navigate({
      name: 'Deck',
      params: {name: name},
    })
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>
        {this.props.deckNames.length > 0 ?
        this.props.deckNames.map(name =>{
          return (
            <SubmitBtn onPress={this.toDeck(name)} text={name} />
          )
        }) : "No Decks are created yet!"
      }</Text>
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

function mapStateToProps ({state}) {
  console.log(state)
  let deckNames = []
  // decks !== undefined ? deckNames = Object.keys(decks) : deckNames = [];

  return {
    deckNames
  }
}

export default connect(mapStateToProps)(Decks)