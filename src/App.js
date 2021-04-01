import React from 'react';
import HomePage from './HomePage/HomePage';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div className='App'>
            <Nav/>
          <main>
            <Route path='/' component={HomePage}/>
          </main>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;