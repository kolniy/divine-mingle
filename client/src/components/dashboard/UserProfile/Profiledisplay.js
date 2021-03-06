import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getProfile } from "../../../actions/profile"
import BasicProfileInfo from "./BasicProfileInfo"
import ProfileTabs from "./ProfileTabs"
import PrivateNavbar from "../../layout/PrivateNavbar"

const Dashboard = ({ getUserProfile }) => {

    useEffect(() => {
        getUserProfile()
    }, [getUserProfile])

    return <>
    <section className="dashboard-container">
        <PrivateNavbar />
        <br /><br />
        <BasicProfileInfo />
        <ProfileTabs />
    </section>
    </>
}

const mapDispatchToProps = (dispatch) => ({
    getUserProfile : () => dispatch(getProfile())
})

export default connect(null, mapDispatchToProps)(Dashboard)