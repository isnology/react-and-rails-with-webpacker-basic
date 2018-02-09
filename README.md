# to setup this app
- from command line - rails new webpacker-basic --webpack=react --database=postgresql -T
- create a Procfile.dev in the root directory of the app and add the following lines to it.
```
web: bundle exec rails s
webpacker: ./bin/webpack-dev-server
```
- if you don't have foreman installed then install into your home directory (out side your app) as follows:-
```
gem install foreman
```
- back inside your app...
- from command line - rails g controller init index
- edit config/routes.rb and add:-
```
root "init#index"
```
- edit app/views/init/index.html.erb and replace with the following:-
```
<div id="root"></div>
<%= javascript_pack_tag 'application' %>
```
- create app/javascript/src directory
- delete app/javascript/packs/hello_react.jsx
- edit app/javascript/packs/application.js and replace with:-
```
console.log('Hello World from Webpacker')
import "../src"
```
- create app/javascript/src/index.js and add the following in it:-
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```
- from command line - yarn add react-router-dom
- create app/javascript/src/App.js and add the following in it:-
```
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
```
- rename app/assets/stylesheets/application.css to application.scss
- edit app/assets/stylesheets/application.scss and replace contents with:-
```
$background: lightgray;

body {
  background: $background;
}

h1 {
  color: red;
}

p {
  color: blue;
}
```
# OR you can use css within react by:-
- create app/javascript/src/styles directory
- create app/javascript/src/styles/app.scss file
- add contents as above
- add the following import to app/javascript/src/App.js
```
import './styles/app.scss'
```
- in app/views/init/index.html.erb add the following line:-
```
<%= stylesheet_pack_tag 'application' %>
``` 
so it looks like this:-
```
<div id="root"></div>
<%= javascript_pack_tag 'application' %>
<%= stylesheet_pack_tag 'application' %>
```
- thats it!

- Note
- if you use css from rails you need to refresh the browser to see changes but from react it's automatic
- advantages of using rails is that gems are easy to install for css

# to start the server run the following command

foreman start -f Procfile.dev -p 3000
