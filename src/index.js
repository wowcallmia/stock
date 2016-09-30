import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import Layout from './components/Layout'
import Repo from './components/Repo'
import Repos from './components/Repos'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
        <Route path=  "/stock/:symbol"  component = {Repo}>
        <Route path='/stock' component={Repos}/>
        </Route>
     </Route>
  </Router>,
  document.getElementById('root')
);
