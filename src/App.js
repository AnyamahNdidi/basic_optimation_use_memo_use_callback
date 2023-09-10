import React, { useState, useCallback,useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [data, setData] = useState('User List');

  const changeTitleHandler = useCallback(() => {
    setData('User Title');
  }, []);

  return (
    <div className='app'>
      <DemoList title={data} allitems={ useMemo( ()=> [5, 3, 1, 10, 9],[])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
