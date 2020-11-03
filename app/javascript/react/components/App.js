import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
