import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Slideshow from './routes/Slideshow/Slideshow'

function App() {
  return (
    <div className="App">
      <Route path='/'><Header /></Route>
      <Route exact path='/' component={Slideshow} />
    </div>
  );
}

export default App;
