import React, { useEffect } from "react"
import { connect } from "react-redux"
import BasicProfileInfo from "./BasicProfileInfo"
import ProfileTabs from "./ProfileTabs"
import PrivateNavbar from "../../layout/PrivateNavbar"
import { getUserProfileById } from "../../../actions/profile"

const Dashboard = ({ match, getProfileById }) => {

    useEffect(() => {
        getProfileById(match.params.profileId)
    }, [getProfileById, match.params.profileId])

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
    getProfileById : (id) => dispatch(getUserProfileById(id))
})

export default connect(null, mapDispatchToProps)(Dashboard)