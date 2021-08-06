import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenTicate } from './Index'

const PrivateRouter = ({ children }) => {
    return (
        <Route render={() => {
            return isAuthenTicate() && isAuthenTicate().user.role == 1 ? children : <Redirect to={{ pathname: '/signin' }} />
        }} />
    )
}

export default PrivateRouter
