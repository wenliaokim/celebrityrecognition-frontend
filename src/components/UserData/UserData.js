import './UserData.css';

const UserData = ({ username, entries }) => {
    if (entries < 100) {
        return (
            <div className='userdata'>
                <div>Welcome {`${username}`}</div>
                <div>your remaining free detections are: {`${100 - parseInt(entries)}`} </div>
            </div>
        );
    } else {
        return (
            <div className='userdata'>
                <div>Welcome {`${username}`}</div>
                <div>your don't have free detections</div>
            </div>
        );
    }

}

export default UserData;