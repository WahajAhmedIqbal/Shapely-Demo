import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routers from '@routers';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routers />
      </div>
    </BrowserRouter>

  );
}

export default App;
