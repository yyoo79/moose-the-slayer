import { useReducer, useCallback } from 'react'
import type { Card, Relic, CharacterId, DeckState } from '../types'

type Action =
  | { type: 'SET_CHARACTER'; character: CharacterId }
  | { type: 'ADD_CARD'; card: Card }
  | { type: 'REMOVE_CARD'; cardId: string }
  | { type: 'ADD_RELIC'; relic: Relic }
  | { type: 'REMOVE_RELIC'; relicId: string }
  | { type: 'RESET' }

const initialState: DeckState = {
  character: null,
  cards: [],
  relics: [],
}

function deckReducer(state: DeckState, action: Action): DeckState {
  switch (action.type) {
    case 'SET_CHARACTER':
      return { ...initialState, character: action.character }

    case 'ADD_CARD':
      // Allow duplicate cards (same card can appear multiple times in a deck)
      return { ...state, cards: [...state.cards, action.card] }

    case 'REMOVE_CARD': {
      // Remove only the last occurrence of this card id
      const idx = [...state.cards].map((c) => c.id).lastIndexOf(action.cardId)
      if (idx === -1) return state
      const newCards = [...state.cards]
      newCards.splice(idx, 1)
      return { ...state, cards: newCards }
    }

    case 'ADD_RELIC':
      // Prevent duplicate relics
      if (state.relics.some((r) => r.id === action.relic.id)) return state
      return { ...state, relics: [...state.relics, action.relic] }

    case 'REMOVE_RELIC':
      return { ...state, relics: state.relics.filter((r) => r.id !== action.relicId) }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

export function useDeck() {
  const [state, dispatch] = useReducer(deckReducer, initialState)

  const setCharacter = useCallback((character: CharacterId) => {
    dispatch({ type: 'SET_CHARACTER', character })
  }, [])

  const addCard = useCallback((card: Card) => {
    dispatch({ type: 'ADD_CARD', card })
  }, [])

  const removeCard = useCallback((cardId: string) => {
    dispatch({ type: 'REMOVE_CARD', cardId })
  }, [])

  const addRelic = useCallback((relic: Relic) => {
    dispatch({ type: 'ADD_RELIC', relic })
  }, [])

  const removeRelic = useCallback((relicId: string) => {
    dispatch({ type: 'REMOVE_RELIC', relicId })
  }, [])

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  return {
    ...state,
    setCharacter,
    addCard,
    removeCard,
    addRelic,
    removeRelic,
    reset,
  }
}
