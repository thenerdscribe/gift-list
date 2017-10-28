import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import gifts from './Gifts';
import List from './List';

class App extends Component {

  componentWillMount() {
    this.setState({
      gifts: []
    })
  }

  componentDidMount() {
    this.setState({
      gifts: gifts()
    })
  }

  render() {

    return (
      <div className="appContainer">
        <h1>Ryan Morton Gift List</h1>
        <List gifts={ this.state.gifts } />
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
