import React from 'react'
import './form.css'
import { Alert } from 'react-bootstrap';

class Thanks extends React.Component {
render() {
    return(
        <div id="mainWrapper">
          <div className="thanks">
            <Alert variant="success">
                <Alert.Heading>Fuck Yeah</Alert.Heading>
                <p>Your profile has been updated! Good shit!</p>
                </Alert>
                </div>
        </div>
    )
}
}
export default Thanks