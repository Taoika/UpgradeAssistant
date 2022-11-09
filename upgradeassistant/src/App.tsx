import 'antd/dist/antd.min.css'
import React from 'react';
import 'antd/dist/antd.variable.min.css';
import 'antd/dist/antd.min.css'
import Home from './pages/Home';
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './base.css'
import Nav from './components/Nav'
function App() {
  const element = useRoutes(routes);
  //导航栏
  const data = [['home', '主页'], ['alldata', '所有资料'], ['test', '你好'],['PostOrUpdate','软件上传']]

  return (
    <div className="App">
      <Nav data={data} />
      <div style={{ width: '100vw', height: '60px' }}></div>
      {element}
    </div>
  );
}

export default App;
