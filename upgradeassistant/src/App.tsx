import React from 'react';
import Home from './pages/Home';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './base.css'
import Nav from './components/Nav'
function App() {
  const element = useRoutes(routes);
  //导航栏
  const data = [['home', '主页'], ['alldata', '所有资料'], ['test', '你好']]

  return (
    <div className="App">
      <Nav data={data} />
      <div style={{ width: '100vw', height: '40px' }}></div>
      {element}
    </div>
  );
}

export default App;
