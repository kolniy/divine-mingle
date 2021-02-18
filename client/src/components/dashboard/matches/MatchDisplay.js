import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Container } from "reactstrap"
import PrivateNavbar from "../../layout/PrivateNavbar"
import MatchDisplayContainer from "./MatchDisplayContainer"
import { getMatches } from "../../../actions/matches"
import Spinner from "../../layout/Spinner"

const MatchDisplay = ({ matches : {
    loading,
    userMatches
}, getUserMatches }) => {

    useEffect(() => {
        getUserMatches()
    }, [getUserMatches])

    return <>
    <section className="match-section">
        <PrivateNavbar />
        <br/><br/>
        <Container>
        <h4 className="page-name">Matches</h4>
         {
             loading ? <Spinner /> : <MatchDisplayContainer matches={userMatches} />
         }
        </Container>    
     </section>
    </>
}

const mapStateToProps = (state) => ({
    matches: state.matches
})

const mapDispatchToProps = (dispatch) => ({
    getUserMatches : () => dispatch(getMatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchDisplay)