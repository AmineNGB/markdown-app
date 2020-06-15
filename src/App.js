import React, { Component } from 'react'
import './App.css';

import marked from 'marked';

import { markedText } from './markedText';

export default class App extends Component {
  state = {
    text: markedText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              value={ this.state.text }
              classname='form-control'
              rows="35" />
          </div>
          <div className="col-sm-6">
            <div 
            dangerouslySetInnerHTML={this.renderText
            (this.state.text)} />
          </div>
        </div>
      </div>
    )
  }
}
