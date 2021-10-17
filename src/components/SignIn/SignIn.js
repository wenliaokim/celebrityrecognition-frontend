import './SignIn.css';

const SignIn = ({onRouteChange}) => {
    return (
        <div className='signInBackground'>
            <div className="container">
                <h1>Please Login</h1>
                <form>
                    <div className="form-control">
                        <input type="text" placeholder='Username'/>
                    </div>
                    <div className="form-control">
                        <input type="password" placeholder='Password'/>
                    </div>
                    <button 
                        onClick={() => onRouteChange('home')} className="btn">
                        Login</button>
                    <div className='textForRegister'>Don't have an account?</div>
                    <button 
                        onClick={() => onRouteChange('register')} className='register'>
                        Register</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;