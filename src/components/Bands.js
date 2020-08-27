import React, { Component } from 'react'

export default class Bands extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }

  renderBands = () => {
    return this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)
  }

}
