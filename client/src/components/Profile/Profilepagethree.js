import React, { useState, useRef } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { uploadProfileImage } from "../../actions/profile"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import ProfileUpload from "./picture-upload/ProfileUpload"
import ResetOrSaveProfile from "./picture-upload/ResetOrSaveProfile"
import dummyAvatar from "../../images/dummy-avatar.png"

const Profilepagethree = ({ saveImage, history }) => {

    const [ selectedFile, updateSelectedFile ] = useState(null)
    const  inPutFileRef = useRef(null)
    const [ imageBlob, updateImageBlob ] = useState(null)

    const filePickerEventHanler = (e) => {
        const reader = new FileReader()
        updateImageBlob(e.target.files[0]) //used to save the image blob before uploading
        reader.addEventListener('load', function(){
            updateSelectedFile(reader.result)
        }, false)

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const resetUpload = () => {
        updateSelectedFile(null)
        let imageUploader = document.querySelector("#image-upload")
        imageUploader.value = null
    }

    const handleUploadClick = () => {
        inPutFileRef.current.click()
    }

    const handleSaveProfileOnClick = () => {
        let formData = new FormData()
        formData.append('avatar', imageBlob)
        saveImage(formData, history, 'dashboard')
    }

    return <>
    <section className="profile-page">
        <Container>
            <Row>
                <Col md="4"></Col>
                <Col md="4">
                <Card className="">
        <CardBody>
        <h3 className="text-center weighted text-dark text-uppercase mb-4">Upload your display picture</h3>
            <div className="photo-uploaded-container">
                <img src={ selectedFile !== null ? selectedFile : dummyAvatar }
                 className="img-fluid rounded-circle shadow slide-in-down" 
                 alt="profile upload container"
                 />
            </div>
            <br/>
            <input style={{
                display:"none"
            }}
            type="file"
            id="image-upload"
            onChange={e => filePickerEventHanler(e)}
            ref={inPutFileRef}
            />
            {
            selectedFile !== null ? 
        <ResetOrSaveProfile handleSaveImage={handleSaveProfileOnClick} resetUpload={resetUpload}/> :
            <ProfileUpload handleUploadClick={handleUploadClick}/>
            }
        <br/>
       <div className="dot-container">
         <div className="dotted active-dot"></div>
         <div className="dotted active-dot"></div>
         <div className="dotted active-dot"></div>
       </div>
  
      </CardBody>
          </Card>
                </Col>
                <Col md="4"></Col>
            </Row>
        </Container>
    </section>
</>
}

const mapDispatchToProps = (dispatch) => ({
    saveImage : (formData, history, routeTo) => dispatch(uploadProfileImage(formData, history, routeTo))
})

export default connect(null, mapDispatchToProps)(withRouter(Profilepagethree))