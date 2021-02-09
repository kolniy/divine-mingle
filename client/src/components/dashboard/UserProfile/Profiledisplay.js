import React from "react"
import BasicProfileInfo from "./BasicProfileInfo"
import ProfileTabs from "./ProfileTabs"
import PrivateNavbar from "../../layout/PrivateNavbar"

const Dashboard = () => {
    return <>
    <section className="dashboard-container">
        <PrivateNavbar />
        <br /><br />
        <BasicProfileInfo />
        <ProfileTabs />
    </section>
    </>
}

export default Dashboard