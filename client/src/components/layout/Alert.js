import React from "react"
import { connect } from "react-redux"
import { Alert, Container } from "reactstrap"

const AlertComponent = ({ alert }) => (
    alert !== null && alert.length !== 0 && alert.map((singleAlert) => (
        <Alert key={singleAlert.id} color={singleAlert.alertType}>
            <Container>
            <strong>{singleAlert.alertType}!</strong> {singleAlert.msg}
            </Container>
        </Alert>
    ))
)

const mapStateToProps = (state) => ({
    alert: state.alert
})

export default connect(mapStateToProps)(AlertComponent)

