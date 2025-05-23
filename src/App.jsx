import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from './components';
import SingleComponents from './layouts/examples/SingleComponents';
import MapExample from './layouts/examples/Map';
import Stats from './layouts/examples/Stats';

const App = () => (
  <Router>
    <div>
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        padding: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/map-example"><Button>Map</Button></Link>
        <Link to="/stats"><Button>Stats</Button></Link>
      </div>
      <Route exact path="/" component={SingleComponents} />
      <Route path="/map-example" component={MapExample} />
      <Route path="/stats" component={Stats} />
    </div>
  </Router>
);

export default App;