import React from 'react';
import './App.css';
import drums from './../../utils/drum_key_data';
import Header from './../Header'
import Drum from './../Drum'

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.playAudio)
  }

  playAudio = (e) => {
    e.preventDefault()
    const keyCode = e.keyCode
    
  }

  state = {drums};

  render() {
    return (
      <div className="App">
        <div className="drumkit">
          <Header />
            <ul>
              {Object.keys(this.state.drums).map(drum => <Drum drumData={this.state.drums[drum]} key={drum} index={drum} />)}
            </ul>
        </div>
      </div>
    );
  }
}
