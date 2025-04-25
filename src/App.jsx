import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from './components';
import SingleComponents from './layouts/examples/SingleComponents';
import MapExample from './layouts/examples/Map';

const App = () => (
  <Router>
    <div>
      <div style={{ display: 'flex', gap: '15px', padding: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/map-example"><Button>Map</Button></Link>
        <Link to="/stats"><Button>Stats</Button></Link>
      </div>
      <Route exact path="/" component={SingleComponents} />
      <Route path="/map-example" component={MapExample} />
      {/* TODO: Add a Route for "/stats" and create a corresponding Stats component */}
    </div>
  </Router>
);

export default App;