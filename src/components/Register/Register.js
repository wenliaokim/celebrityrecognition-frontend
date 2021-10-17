import './Register.css';

const Register = ({onRouteChange}) => {
    return (
        <div className='registerBackground'>
            <div className="container">
                <h1>Register</h1>
                <form>
                    <div className="form-control">
                        <input type="text" placeholder='Username'/>
                    </div>
                    <div className="form-control">
                        <input type="password" placeholder='Password'/>
                    </div>
                    <button 
                        onClick={() => onRouteChange('home')} className="btn">
                        Register</button>
                    <div className='textForLogin'>Already have an account?</div>
                    <button onClick={() => onRouteChange('signin')} className='login'>
                        Login</button>
                </form>
            </div>
        </div>
    );
}

export default Register;