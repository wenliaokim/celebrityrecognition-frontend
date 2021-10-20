import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signInUsername: '',
      signInPassword: '',
    }
  }

  onUsernameChange = (event) => {
    this.setState({signInUsername: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSumbitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className='signInBackground'>
        <div className="container">
          <h1 className='logintitle'>Please Login</h1>
          {/* <form> */}
          <div className="form-control">
            <input onChange={this.onUsernameChange} type="text" placeholder='Username'/>
          </div>
          <div className="form-control">
            <input onChange={this.onPasswordChange} type="password" placeholder='Password'/>
          </div>
          <button 
            onClick={this.onSumbitSignIn} className="btn">
            Login</button>
          <div className='textForRegister'>Don't have an account?</div>
          <button 
            onClick={() => onRouteChange('register')} className='register'>
            Register</button>
          {/* </form> */}
        </div>
      </div>
    );
  }

}

export default SignIn;