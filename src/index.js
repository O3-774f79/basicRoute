import React from 'react';
import ReactDOM from 'react-dom';
import ModalGallery from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route component={ModalGallery} />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
