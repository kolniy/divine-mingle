import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const PubliceRoute = ({ 
    component: Component,
    auth: {
    authenticated,
    loading
}, ...rest }) => {
    return (
        <Route {...rest} render={(props => authenticated && !loading  ? (<Redirect to="/dashboard/profile" />) : (<Component {...props} />)  )} />
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PubliceRoute)
