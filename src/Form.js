import React from 'react'
import './form.css'
import { Form as Forms, Button, Alert } from 'react-bootstrap';
import Errors from './Errors'
import validator from 'validator';

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
        password_confirm: '',
        website: '',
        errors: [],
        showError: false,
        err: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    validateAll = (e) => {
        e.preventDefault()
        if(this.state.name === '') {
            this.state.errors.push("Please enter your name")
            this.setState({
                showError: true,
                err: 'errorvalidate'
            })
        } else {
            this.setState({
                showError: false,
                err: ''
            })
        }
        if(!validator.isEmail(this.state.email)) {
            this.state.errors.push("Invalid Email")
            this.setState({
                showError: true,
                err: 'errorvalidate'
            })
        } else {
            this.setState({
                showError: false,
                err: ''
            })
        }
        if(this.state.username === '') {
            this.state.errors.push("Please enter a username")
            this.setState({
                showError: true,
                err: 'errorvalidate'
            })
        } else {
            this.setState({
                showError: false,
                err: ''
            })
        }
        if(validator.isLength(this.state.password, {min:8})) {
            if(!validator.equals(this.state.password, this.state.password_confirm)) {
                this.state.errors.push("Your passwords do not match")
                this.setState({
                    showError: true,
                    err: 'errorvalidate'
                })
            } else {
                this.setState({
                    showError: false,
                    err: ''
                })
            }
        } else {
            this.state.errors.push("Your password must contain 8 characters")
            this.setState({
                showError: true,
                err: 'errorvalidate'
            })
        }
        if(this.state.website === '') {
            this.state.errors.push("Your website field is empty!")
            this.setState({
                showError: true,
                err: 'errorvalidate'
            })
        }
        setTimeout(() => {
            if(this.state.showError === false) {
                this.props.history.push("/thankyou")
            }
        },200)
    }
    closeError = (e) => {
        this.setState({
            showError: false,
            errors: [],
            err: ''
        })
    }


    render() {
        return (
        <div id="mainWrapper">
          <form onSubmit={this.validateAll}>
          <Alert variant="danger" show={this.state.showError} onClose={this.closeError} dismissible>
            <Errors errors={this.state.errors}></Errors>
            </Alert>
              <h1>Profile Form</h1>
            <Forms.Group controlId="name">
                <Forms.Label className={this.state.err}>Name</Forms.Label>
                <Forms.Control className={this.state.err} type="text" placeholder="Enter name" onChange={this.handleChange} />
            </Forms.Group>
            <Forms.Group controlId="email">
                <Forms.Label className={this.state.err}>Email address</Forms.Label>
                <Forms.Control className={this.state.err} type="email" placeholder="Enter email" onChange={this.handleChange} />
            </Forms.Group>
            <Forms.Group controlId="username">
                <Forms.Label className={this.state.err}>Username</Forms.Label>
                <Forms.Control className={this.state.err} type="text" placeholder="Enter username" onChange={this.handleChange} />
            </Forms.Group>
            <Forms.Group controlId="password">
                <Forms.Label className={this.state.err}>Password</Forms.Label>
                <Forms.Control className={this.state.err} type="password" placeholder="Enter password" onChange={this.handleChange} />
            </Forms.Group>
            <Forms.Group controlId="password_confirm">
                <Forms.Label className={this.state.err}>Confirm Password</Forms.Label>
                <Forms.Control className={this.state.err} type="password" placeholder="Enter password" onChange={this.handleChange} />
            </Forms.Group>
            <Forms.Group controlId="website">
                <Forms.Label className={this.state.err}>Website</Forms.Label>
                <Forms.Control className={this.state.err} type="text" placeholder="Enter website" onChange={this.handleChange} />
            </Forms.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
        </div>
        )
    }
}
export default Form