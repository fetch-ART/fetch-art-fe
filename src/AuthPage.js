import React, { Component } from 'react'
import request from 'superagent'

export default class AuthPage extends Component {

    state = { 
        email: '',
        password: '',
    };

    handleEmail = (e) => {
        const input = e.target.value; 
        this.setState({ email: input})
        console.log(input)
    }

    handlePassword = (e) => {
        const input = e.target.value; 
        this.setState({ password: input})
        console.log(input)
    }


// this handler signs you up 
    handleSignUp = async(e) => {
        e.preventDefault();
        const data = await request.post(`http://localhost:3000/auth/signup`, this.state)
        this.setState({ token: data.body.token })
        localStorage.setItem('TOKEN', data.body.token)
        this.props.history.push('/list')
    }

    // this handler signs you in 
    handleSignIn = async (e) => {
        e.preventDefault();
        const data = await request.post('http://localhost:3000/auth/signin', this.state)
        this.setState({ success: data.body })
        this.props.history.push('/list')
    }

    render() {

        return (
        <>
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSignUp}>
                    <label>
                        Email
                        <input type='text' onChange={this.handleEmail} name='email' required/>
                    </label>

                    <label>
                        Password
                        <input type='text' onChange={this.handlePassword} name='password' required />
                        <input type='submit' />
                    </label>
                </form>

            </div>

            <div>

                <h3>Sign In</h3>
                <form onSubmit={this.handleSignIn}>
                    <label>
                        Email
                        <input type='text' onChange={this.handleEmail} name='email' />
                    </label>

                    <label>
                        Password
                        <input type='text' onChange={this.handlePassword} name='password' />
                        <input type='submit' />
                    </label>
                </form>
            </div>

        </>
        )
    }
}

