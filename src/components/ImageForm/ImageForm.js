import './ImageForm.css';

const ImageForm = ({imageUrl, celebrity}) => {
  if (celebrity.poss && (imageUrl.match(/\.(jpeg|jpg|gif|png|JPEG|JPG|GIT|PNG)$/) != null)) {
    return (
      <div className='center ma'>
        <div className='imageContainer'>
          <div>
          <span className='emphasis'>{`${(celebrity.poss * 100).toFixed(2)}% `}</span>
          {`possibility: `}</div>
          <div className='emphasis'>{`${celebrity.person[0].toUpperCase() + celebrity.person.slice(1)}`}</div>
          <img id='inputImage' src={imageUrl} alt='' width='400px' height='auto' />
        </div>
      </div>
      );
  } else {
    return (
      <div className='noValidInput'>
        <div>WAITTING...</div>
      </div>
    );
  }

}

export default ImageForm;