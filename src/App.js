import React from 'react';
import {Provider} from "react-redux";
import store from './reducer/store';

import Table from './components/Table/Table';
import SetingPanel from './components/SetingPanel/SetingPanel'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <SetingPanel />
      <Table/> 
    </Provider>
  );
}

export default App;
