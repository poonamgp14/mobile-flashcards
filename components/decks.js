import React,  { Component }  from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from "react-redux";
import SubmitBtn from './submitBtn'
import {fetchFlashCardResults,getData} from '../utils/api'
import AppLoading from 'expo-app-loading';
import { receiveDecks } from '../actions'

class Decks extends Component {
  // state = {
  //   ready: false
  // }
  // componentDidMount() {
  //   const { dispatch } = this.props
  //   fetchFlashCardResults()
  //   .then((decks) => dispatch(receiveDecks(decks)))
  //   .then(() => this.setState(() => ({
  //     ready: true
  //   })))
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
    // const { ready } = this.state;
    // if (ready === false) {
    //     return <AppLoading />
    // }
    return (
      <View style={styles.container}>
        <Text>
        {this.props.deckNames.length > 0 ?
        this.props.deckNames.map(name =>{
          return (
            name
            // <SubmitBtn onPress={this.toDeck(name)} text={name} />
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

function mapStateToProps (decks) {
  console.log('i m in decks')
  console.log(decks)
  let deckNames = []
  decks !== undefined ? deckNames = Object.keys(decks) : deckNames = [];

  return {
    deckNames
  }
}

export default connect(mapStateToProps)(Decks)