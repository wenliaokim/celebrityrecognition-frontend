import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
import LinkInputBox from './components/LinkInputBox/LinkInputBox';
import ImageForm from './components/ImageForm/ImageForm';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'aab96e3d504344b391336320627df42a'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      faceBox: {},
      celebrity: {}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  guessCelebrity = (response) => {
    const name = response.outputs[0].data.regions[0].data.concepts[0].name;
    const possibility = response.outputs[0].data.regions[0].data.concepts[0].value;
    this.setState({celebrity: {person: name, poss: possibility}})
    console.log(this.state.celebrity);
  }

  calculateFacePosition = (response) => {
    const faceRange = response.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(faceRange);
    const image = document.querySelector('#inputImage');
    const imageW = Number(image.width);
    const imageH = Number(image.height);
    console.log(imageW);
    console.log(imageH);
    this.setState({faceBox: {
      leftCol: faceRange.left_col * imageW,
      topRow: faceRange.top_row * imageH,
      rightCol: imageW - (faceRange.right_col * imageW),
      bottomRow: imageH - (faceRange.bottom_row * imageH)
    }});
    console.log(this.state.faceBox);
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
    .then(response => {
      this.guessCelebrity(response);
      this.calculateFacePosition(response);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <LinkInputBox onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <ImageForm imageUrl={this.state.imageUrl} celebrity={this.state.celebrity} faceBox={this.state.faceBox}/>
        <Particles className='particle' params={particlesOptions}/>
      </div>
    );
  }
}

export default App;
