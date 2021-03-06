import React from 'react'
import { Route } from 'react-router-dom'

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <div>
          <Component {...props} />
        </div>
      )
    }}
  />
)
