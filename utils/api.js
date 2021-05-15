import AsyncStorage from '@react-native-async-storage/async-storage'
import { receiveDecks } from '../actions'
export const async_key = 'Flashcard_App'

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
    return (dispatch) =>{
      return AsyncStorage.getItem(async_key)
        .then(values =>{
          console.log(values)
          dispatch(receiveDecks(values))
        })
    }
}