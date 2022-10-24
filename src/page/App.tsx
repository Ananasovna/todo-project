import React from 'react';
import {Header} from "../components/Header/Header";
import { Main } from '../components/Main/Main';
import { TaskCard } from '../components/TaskCard/TaskCard';




function App() {
  return (
    <div className='app'>
      <Header/>
      <Main />
      {/* <TaskCard /> */}
    </div>
  );
}

export default App;
