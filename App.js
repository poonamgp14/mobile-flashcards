import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './components/decks';
import AddDeck from './components/addDeck';
import middleware from './middleware'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white,red  } from './utils/colors'

import {getData} from './utils/api'

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

class App extends React.Component {
  componentDidMount(){
    console.log('i m in app')
    this.props.dispatch(getData())
  }
  render(){
    return (
      // <Provider store={createStore(reducer,middleware)}>
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let icon
                if (route.name === 'Add Deck') {
                  icon = (
                    <FontAwesome name="plus-square" size={size} color={color} />
                  )
                } else if (route.name === 'Decks') {
                  icon = (
                    <Ionicons name="ios-bookmarks" size={size} color={color} />
                  )
                }
                return icon
              },
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === 'ios' ? red : white,
              style: {
                backgroundColor: Platform.OS === 'ios' ? white : purple,
              },
              indicatorStyle: {
                // Android tab indicator (line at the bottom of the tab)
                backgroundColor: 'yellow',
              },
            }}
          >
            <Tab.Screen name="Decks" component={Decks} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      // </Provider>
      
    );
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

export default connect()(App)