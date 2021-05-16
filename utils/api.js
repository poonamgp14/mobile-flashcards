import AsyncStorage from '@react-native-async-storage/async-storage'
import { receiveDecks } from '../actions'
export const async_key = 'Flashcard_App'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function submitDeck ({ deckName,deck }) {
  try{
  // return AsyncStorage.setItem(async_key, JSON.stringify({[deckName] : deck}))
  return AsyncStorage.mergeItem(async_key, JSON.stringify({
    [deckName] : deck
  }))
  }catch(e){
    console.log(e)
  }
}

export function removeDeck (key) {
  return AsyncStorage.getItem()
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      //AsyncStorage.setItem(, JSON.stringify(data))
    })
}


export function getData(){
  console.log('i m in getdata')
    return (dispatch) =>{
      AsyncStorage.clear()
      // dispatch(showLoading())
      return AsyncStorage.getItem(async_key)
        .then(values =>{
          console.log(values)
          let decks = formatFlashCardResults(values)
          dispatch(receiveDecks(decks))
          // dispatch(hideLoading())
        })
    }
}


function setDefaultObjectShape () {
  let deckData = getDecksInfo()
  AsyncStorage.setItem(async_key, JSON.stringify(deckData))
  return deckData
}

function returnNonEmpty (deckObject) {
  const length = Object.keys(deckObject).length
  const timestamp = Date.now()
  return deckObject
}

export function formatFlashCardResults (results) {
  console.log(results)
  return results === null
    ? setDefaultObjectShape()
    : returnNonEmpty(JSON.parse(results))
}

export function getDecksInfo (deck) {
  let decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ],
      answersSelected: []
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ],
      answersSelected: []
    }
  }
  
  return typeof deck === 'undefined' ? decks : decks[deck]
  }


