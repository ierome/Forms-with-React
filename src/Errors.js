import React from 'react'

class Errors extends React.Component {
    render() {
        return(
            <>
            {this.props.errors.map((item, i) => {
                return (<li key={i}>{item}</li>)
            })}
            </>
        )
    }
}
export default Errors