import React from "react"
import { FormGroup, Button } from "reactstrap"

const ProfileUpload = ({ handleUploadClick }) => {
    return <>
     <FormGroup>
        <Button onClick={e => handleUploadClick(e)} block 
        className="btn-icon"
         type="submit"
          color="warning"
           size="lg">UPLOAD</Button>
    </FormGroup>
    </>
}

export default ProfileUpload