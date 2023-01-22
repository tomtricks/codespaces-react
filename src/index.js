import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Ele from './views/ele'
import Page from './views/page'
import Hg from './views/hg'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Ele} exact path="/ele" />
        <Route component={Page} exact path="/page" />
        <Route component={Hg} exact path="/hg" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
