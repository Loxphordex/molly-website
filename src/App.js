import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Slideshow from './routes/Slideshow/Slideshow'
import Gallery from './routes/Gallery/Gallery'
import Contact from './routes/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Route path='/'><Header /></Route>
      <Route exact path='/' component={Slideshow} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/contact' component={Contact} />
    </div>
  );
}

export default App;
