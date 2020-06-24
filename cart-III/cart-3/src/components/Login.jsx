import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { app } = this.props
        const {username, password} = this.state
        let payload = {
            username,
            password
        }
        app.checkUser(payload)
    }

    render() {
        let { app } = this.props
        if(app.authenticate()){
            return <Redirect to='/' />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label name='username'>Username</label>
                    <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
                    <label name='password'>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
