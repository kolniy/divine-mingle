import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getProfile } from "../../../actions/profile"
import PrivateNavbar from "../../layout/PrivateNavbar"
import UpdateBasicProfile from "./UpdateBasicProfile"
import UserUpdateProfileTabs from "./UserUpdateProfileTabs"

const UpdateProfile = ({ profile:{
    userprofile
}, getUserProfile }) => {

    const [ profileObject, updateProfileBoject ] = useState({
        firstname: userprofile !== null ? userprofile.firstname : "",
        lastname: userprofile !== null ? userprofile.lastname : "",
        address: userprofile !== null ? userprofile.address : "",
        profilepic: userprofile !== null ? userprofile.profilepic : "",
        age: userprofile !== null ? userprofile.age : 0,
        about: userprofile !== null ? userprofile.about : "",
        denomination : userprofile !== null ? userprofile.about : "",
        maritalstatus : userprofile !== null ? userprofile.maritalstatus : "",
        interests : userprofile !== null ? userprofile.interests : [],
        ethnicity: userprofile !== null ? userprofile.ethnicity : "",
        eyecolor: userprofile !== null ? userprofile.eyecolor : "",
        height: userprofile !== null ? userprofile.height : "",
        bodytype: userprofile !== null ? userprofile.bodytype : "",
        questions: userprofile !== null ? userprofile.questions : []
    })

    useEffect(() => {
        getUserProfile()
    }, [getUserProfile])

    return <>
    <PrivateNavbar />
    <br />
      <UpdateBasicProfile />
      <UserUpdateProfileTabs />
   </>
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
    getUserProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)