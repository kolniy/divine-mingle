import React from "react"
import BasicProfileInfo from "./BasicProfileInfo"
import ProfileTabs from "./ProfileTabs"

const Dashboard = () => {
    return <>
    <section className="dashboard-container">
        <BasicProfileInfo />
        <ProfileTabs />
    </section>
    </>
}

export default Dashboard