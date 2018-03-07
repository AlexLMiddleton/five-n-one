import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'
import { starWarsCharacters } from './reducers/starwars'
import { buzzwords } from './reducers/buzzwords'
import { emojis } from './reducers/emojis'
import { fortuneCookies } from './reducers/fortune-cookies'

export default createStore(
  combineReducers({
    colors,
    starWarsCharacters,
    buzzwords,
    emojis,
    fortuneCookies
  }),
  applyMiddleware(thunk)
)
