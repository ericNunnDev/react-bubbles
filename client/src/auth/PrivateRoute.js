import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import BubblePage from '../components/BubblePage';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => 
        localStorage.getItem('token') ? (
            <BubblePage to='/bubblepage' {...props} />
        ) : (
            <Redirect
              to='/'
              />
        )
    }
    />
);
