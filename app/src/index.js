import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import { setColors } from './action-creators/colors'
import { setStarWars } from './action-creators/starwars'
import { setBuzzwords } from './action-creators/buzzwords'
import { setFortuneCookies } from './action-creators/fortune-cookies'
import { setEmojis } from './action-creators/emojis'

import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setStarWars)
store.dispatch(setBuzzwords)
store.dispatch(setFortuneCookies)
store.dispatch(setEmojis)
