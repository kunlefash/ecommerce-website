import React from 'react'

import {BrowserRouter as Router} from "react-router-dom"
import {BrowserRouter as Switch} from "react-router-dom"
import {BrowserRouter as Route} from "react-router-dom"
import Home from './home/Home'
import Header from './header/Header'
function App() {
  return (
    <Router>
      <div className='app'>
      
        <Switch>
          <Route path='/'>
            <Header />
            <Home/>

          </Route>
  
        </Switch>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>CHECKOUT</h1>
          </Route>
  
        </Switch>
      </div>
  
    </Router>
  )
}

export default App