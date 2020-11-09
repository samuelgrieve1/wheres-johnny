import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import UserShowContainer from './UserShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/:id' component={UserShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
