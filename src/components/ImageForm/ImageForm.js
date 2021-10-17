import './ImageForm.css';

const ImageForm = ({imageUrl, celebrity, faceBox}) => {
    if (celebrity.poss && imageUrl) {
        return (
            <div className='center ma'>
                    <div className='text'>
                        <div><span className='emphasis'>{`${(celebrity.poss * 100).toFixed(2)}% `}</span>
                        {`possibility: `}</div>
                        <div className='emphasis'>{`${celebrity.person[0].toUpperCase() + celebrity.person.slice(1)}`}</div>
                    </div>
                    <div className='imageWithBox absolute mt2'>
                        <img id='inputImage' src={imageUrl} alt='' width='400px' height='auto' />
                        <div className='bounding-box' 
                            style={{top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol}}>
                        </div>
                    </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='waiting'>
                    <div>WAITTING...</div>
                </div>
            </div>
        );
    }

}

export default ImageForm;