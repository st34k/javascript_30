import React from 'react'

export default class Drum extends React.Component {
  render() {
    return (
      <li className="drum">
        { this.props.drumData.key.toUpperCase() }
      </li>
    )
  }
}
