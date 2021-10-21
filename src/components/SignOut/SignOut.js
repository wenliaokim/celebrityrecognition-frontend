import './SignOut.css';

const SignOut = ({onRouteChange}) => {
    return (
        <div>
            <div onClick={() => {
                onRouteChange('signin')}} 
            className='signout'>Sign out</div>
        </div>
    );
}

export default SignOut;