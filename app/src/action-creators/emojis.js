import fetch from 'isomorphic-fetch'
const url = 'http://localhost:5000/emojis'
import { SET_EMOJIS } from '../constants'

export const setEmojis = async (dispatch, getState) => {
  const emojis = await fetch(url).then(res => res.json())
  dispatch({ type: SET_EMOJIS, payload: emojis })
}
