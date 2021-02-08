import React from "react"
import { FormGroup, Button } from "reactstrap"

const ResetProfileUpload = ({ resetUpload, handleSaveImage }) => {

    return <>
    <FormGroup>
        <Button onClick={e => resetUpload(e)} block 
        className="btn-icon btn-change-photo" type="submit"
          size="lg">CHANGE PHOTO</Button>
    </FormGroup>
    <FormGroup>
        <Button onClick={handleSaveImage} block 
        className="btn-icon" type="submit"
         color="warning"
          size="lg">SAVE AND CONTINUE</Button>
    </FormGroup>
        </>
}

export default ResetProfileUpload