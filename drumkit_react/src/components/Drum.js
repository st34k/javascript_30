import React from 'react'

export default class Drum extends React.Component {
  render() {
    const { data_key, path, keyName } = this.props.drumData;
    return (
      <div className="drum" >
        <p className="drum-pad-text">{keyName}</p>
        <audio className="clip" id={data_key}>
          <source src={path} type="audio/mpeg"></source>
        </audio>
      </div>
    )
  }
}
