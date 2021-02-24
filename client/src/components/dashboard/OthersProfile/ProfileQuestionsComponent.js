import React from "react"

const ProfileQuestionsComponent = () => {
    return <>
        <div className="profile-questions">
            <div className="individual-question">
                <h3 className="question-item">How Many Kids would you like to have?</h3>
                <p className="question-answer">5</p>
            </div>
            <div className="individual-question">
                <h3 className="question-item">Do you already have kids?</h3>
                <p className="question-answer">No</p>
            </div>
            <div className="individual-question">
                <h3 className="question-item">How do usually spend your free time?</h3>
                <p className="question-answer">Spending time with my family</p>
            </div>
            <div className="individual-question">
                <h3 className="question-item">Ever read the entire bible cover to cover?</h3>
                <p className="question-answer">Yes</p>
            </div>
        </div>
    </>
}

export default ProfileQuestionsComponent