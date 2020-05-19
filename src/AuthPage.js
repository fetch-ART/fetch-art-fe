import React, { Component } from 'react'

export default class AuthPage extends Component {

    state = { 
        email: '', 
        password: ''};

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

    handleSubmit = (e) => {
        e.preventDefault(); 
        const token = Math.random(); 

        console.log(token, this.state.email, this.state.password);
        this.props.handleTokenChange(token);
        // this.props.history.push('/list')
            // will need to change this to the appropriate route we want to link to
    }

    render() {

        return (
        <>
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" onChange={this.handleEmail} name="email" value={this.state.email} />
                    </label>

                    <label>
                        Password
                        <input type="text" onChange={this.handlePassword} name="password" value={this.state.password} />
                        <input type='submit' />
                    </label>
                </form>

            </div>

            <div>

                <h3>Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" onChange={this.handleEmail} name="email" value={this.state.email} />
                    </label>

                    <label>
                        Password
                        <input type="text" onChange={this.handlePassword} name="password" value={this.state.password} />
                        <input type='submit' />
                    </label>
                </form>
            </div>

        </>
        )
    }
}

