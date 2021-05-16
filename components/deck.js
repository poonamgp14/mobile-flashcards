import React,  { Component }  from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { connect } from "react-redux";
import SubmitBtn from './submitBtn'
import {getData} from '../utils/api'

class Deck extends Component {
  componentDidMount(){
    this.props.dispatch(getData())
  }
  toAddCard = (name) => {
    console.log(this.props.navigation)
    this.props.navigation.dispatch(CommonActions.navigate({
      name: 'AddCard',
      params: {},
    })
    )
  }

  toQuiz = (name) => {
    console.log(this.props.navigation)
    this.props.navigation.dispatch(CommonActions.navigate({
      name: 'Quiz',
      params: {},
    })
    )
  }

  render(){
    return (
      <View style={styles.container}>
          <SubmitBtn onPress={this.toAddCard()} text='Add a Card'/>
          <SubmitBtn onPress={this.toQuiz()} text='Start Quiz'/>
        
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

function mapStateToProps ({decks},props) {
  console.log(decks)
  const deck = decks[props.name]

  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck)