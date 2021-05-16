import {ADD_DECK} from '../actions'
import {RECEIVE_DECKS} from '../actions'

function decks(state={},action){
	// console.log('state')
	// console.log(state)
	// console.log(action)
	switch (action.type){
		case ADD_DECK:
			return {
				...state,
				...action.deck
			}
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			}
		default:
			return state
}
}

export default decks
