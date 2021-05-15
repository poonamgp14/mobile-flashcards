import React,  { Component }  from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { connect } from "react-redux";
import { addDeck } from '../actions';
import {submitDeck} from '../utils/api'
import SubmitBtn from './submitBtn'
import { CommonActions } from '@react-navigation/native';


class AddDeck extends Component {
  state = {name: ''} 
  onChangeAddDeck = (e) => {
    this.setState((state) => {
      return {
        ...state,
        name: e
      }
    })
  }
  submit = () =>{
    const title = this.state.name;
    let newDeck = {
      [title]:{
        title: title,
        questions: []
      }
    }
    this.props.dispatch(addDeck(newDeck))
    this.setState((state) => {
      return {
        ...state,
        name: ''
      }
    })
    submitDeck({title,newDeck})
    this.toHome()

  }
  toHome = () => {
    console.log(this.props.navigation)
    this.props.navigation.dispatch(CommonActions.navigate({
      name: 'Decks',
      params: {},
    })
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Add a Deck</Text>
        <TextInput
          onChangeText={(text) => this.onChangeAddDeck(text)}
          value={this.state.name}
          placeholder="Enter a name for the new deck"
          keyboardType="numeric"
        />
        <SubmitBtn onPress={this.submit} text='Create Deck' />
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

export default connect()(AddDeck)