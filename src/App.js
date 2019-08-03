import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Slideshow from './routes/Slideshow/Slideshow'
import Categories from './routes/Categories/Categories'
import Gallery from './routes/Gallery/Gallery'
import About from './routes/About/About'
import Contact from './routes/Contact/Contact'
import Admin from './routes/Admin/Admin'

function App() {
  return (
    <div className="App">
      <Route path='/'><Header /></Route>
      <Route exact path='/' component={Slideshow} />
      <Route path='/categories' component={Categories} />
      <Route path='/gallery/:category' component={Gallery} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/login' render={({ history }) => <Admin history={history} />} />
    </div>
  );
}

export default App;
