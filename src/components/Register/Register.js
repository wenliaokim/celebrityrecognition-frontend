import React from 'react';
import './Register.css';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
    }
  }

  onUsernameChange = (event) => {
    this.setState({registerUsername: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value});
  }

  validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onSumbitRegister = () => {
    if (this.validateEmail(this.state.registerEmail)) {
      fetch('https://stark-temple-20098.herokuapp.com/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: this.state.registerUsername,
          email: this.state.registerEmail,
          password: this.state.registerPassword,
        })
      })
        .then(response => response.json())
        .then(user => {
          if (user.username) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
        })
    }
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className='registerBackground'>
        <div className="register_container">
          <h1 className='registertitle'>Register</h1>
          {/* <form> */}
            <div className="form-control">
              <input onChange={this.onUsernameChange} type="text" placeholder='Username'/>
            </div>
            <div className="form-control">
              <input onChange={this.onEmailChange} type="email" placeholder='Email'/>
            </div>
            <div className="form-control">
              <input onChange={this.onPasswordChange} type="password" placeholder='Password'/>
            </div>
            <button 
              onClick={this.onSumbitRegister} className="btn">
              Register</button>
            <div className='textForLogin'>Already have an account?</div>
            <button onClick={() => onRouteChange('signin')} className='login'>
              Login</button>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default Register;