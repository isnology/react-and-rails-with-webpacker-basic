import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './styles/app.scss'


class App extends Component {

  // <Route path='/' render={() => <QuotesDisplay state={ this.state } />} />
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>

              <Route path='/' render={ () => (
                <Fragment>
                  <h1>Hello World</h1>
                  <p>How are you?</p>
                </Fragment>
              )}/>

            </Switch>
          </div>
        </Router>
    )
  }
}

export default App