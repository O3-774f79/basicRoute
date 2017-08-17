import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import test from './test'
import Home from './home'
import ImageView from './imageview'
class ModalGallery extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/img/" component={ImageView} />
          <Route path="/test" component={test} />
        </Switch>
      </div>
    )
  }
}
export default ModalGallery
