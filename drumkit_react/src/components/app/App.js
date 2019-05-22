import React from 'react';
import './App.css';
import drums from './../../utils/drum_key_data';
import Header from './../Header'
import Drum from './../Drum'

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.playSound);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.playSound);
  }

  playSound = (e) => {
    const audio = document.getElementById(e.keyCode);
    if (!audio) return;
    audio.play();
  }

  startPlayback = (keyCode) => {
    const audio = document.getElementById(keyCode);
    if (audio) return audio.play();
  }

  state = {drums};

  render() {
    return (
      <div className="App">
        <div className="drumkit">
          <Header />
            <div>
              {Object.keys(this.state.drums).map(drum => <Drum drumData={this.state.drums[drum]} key={drum} /> )}
            </div>
        </div>
      </div>
    );
  }
}
