import fetch from 'isomorphic-fetch'
const url = 'http://localhost:5000/starwars'
import { SET_STARWARS } from '../constants'

export const setStarWars = async (dispatch, getState) => {
  const chars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARWARS, payload: chars })
}
