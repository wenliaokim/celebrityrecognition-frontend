import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div>
            <div>
                <Tilt className="Tilt" options={{ max : 20 }}>
                <div className="Tilt-inner"><h1>Celebrity Recognition</h1></div>
                </Tilt>
                <div className='signout'>Sign out</div>
            </div>
        </div>
    );
}

export default Logo;