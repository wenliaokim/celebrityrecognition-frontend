import './LinkInputBox.css';

const LinkInputBox = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p>Input an image(.jpg/jpeg) address with a celebrity</p>
            <div className='imageInputBox center pa2 br3 shadow-5'>
                <input className='input f4 pa2 w-80 center' type='text'
                onChange={onInputChange}/>
                <button className='button w-20 shadow-5' onClick={onButtonSubmit}>Enter</button>
            </div>
        </div>
    );
}

export default LinkInputBox;