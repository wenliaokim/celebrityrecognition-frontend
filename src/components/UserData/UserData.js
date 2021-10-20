import './UserData.css';

const UserData = ({ username, entries }) => {
    return (
        <div className='userdata'>
            <div>Welcome {`${username}`}</div>
            <div>your remaining free detections are: {`${100 - parseInt(entries)}`} </div>
        </div>
    );
}

export default UserData;