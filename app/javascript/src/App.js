import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {
  state = {
    text: "How are you all"
  }

  render() {
    const { text } = this.state

    return (
        <Router>
          <div className="App">
            <Switch>

              <Route path='/' render={ () => (
                <Fragment>
                  <h1>Hello World</h1>
                  <p>{ text }?</p>
                </Fragment>
              )}/>

            </Switch>
          </div>
        </Router>
    )
  }
}

export default App