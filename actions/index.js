export const ADD_DECK = 'ADD_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function addDeck(deck){
	return {
	type: ADD_DECK,
	deck
}
}

export function receiveDecks(decks){
	console.log("in the action, initial deck is ")
	console.log(decks)
	return {
		type: RECEIVE_DECKS,
		decks
	}
}
