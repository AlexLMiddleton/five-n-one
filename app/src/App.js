import React from 'react'
import Colors from './pages/colors/index'
import Buzzwords from './pages/buzzwords/index'
import Emojis from './pages/emojis/index'
import FortuneCookies from './pages/fortune-cookies/index'
import StarWars from './pages/starwars/index'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords" component={Buzzwords} />
          <Route path="/emojis" component={Emojis} />
          <Route path="/fortune-cookies" component={FortuneCookies} />
          <Route path="/starwars" component={StarWars} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
