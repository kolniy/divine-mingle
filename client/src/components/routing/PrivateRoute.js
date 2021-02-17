import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const PrivateRoute = ({ 
    component: Component,
    auth: {
    authenticated,
    loading
    },
...rest }) => {

    return (
        <Route {...rest} render={(props => !authenticated && !loading ? (<Redirect to="/login" />) :
             (<Component {...props} />)  )} />
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps)(PrivateRoute)
