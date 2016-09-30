import React, {Component} from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class Repos extends Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/stock/:symbol">React Router</NavLink></li>
          
        </ul>
        {this.props.children}
      </div>
    )
  }
}