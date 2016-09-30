import React, { Component } from 'react'
import LookupForm from './LookupForm'
import TableResult from './TableResult'
import Repo from './Repo'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
      <LookupForm/>

      
        <h1 className='text-center'>Stock Lookup</h1>
          
        <TableResult/>
        {this.props.children}
      </div>
    )
  }
}
