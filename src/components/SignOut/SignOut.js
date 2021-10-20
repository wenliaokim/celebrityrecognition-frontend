import './SignOut.css';

const SignOut = ({onSignOutChange, onRouteChange}) => {
    return (
        <div>
            <div onClick={() => {
                onRouteChange('signin');
                onSignOutChange();}} 
            className='signout'>Sign out</div>
        </div>
    );
}

export default SignOut;