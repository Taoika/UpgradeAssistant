import React, { useState } from 'react'
import './index.scss'
import SoftwareDetail from '../../components/SoftwareDetail'
import PostOrUpdate from '../PostOrUpdate'

export default function Home() {
  const data = ['全部', '信息管理', '研发设计稿', '虚拟操控 ',]
  const count = [1, 2, 3, 4, 5, 6, 7, 8]
  const [showdetail, setShowdetail] = useState(0)
  const handleSoftwareDetail = () => {
    setShowdetail(1);
  }
  return (
    <div className='Home'>
      {showdetail ? <SoftwareDetail setShowdetail={setShowdetail} /> : ''}
      <div className='Home-Top'>
        <ul >
          {data.map((v, i) => {
            return (<li key={i}>{v}</li>)
          })}
        </ul>
        <div className='Home-Search'>search</div>
      </div>
      <ul className='Home-Main'>
        {data?.map((v, i) => {
          return (<li className='Home-Type' key={i}>
            <p>{v}</p>
            <div className='Home-Line'></div>
            <ul>
              {count?.map((v, i) => {
                return (<li onClick={handleSoftwareDetail} className='Home-Software' key={i}>
                  <div className='Home-Pic'><img src="https://seopic.699pic.com/photo/50062/9677.jpg_wh1200.jpg" alt="" /></div>
                  <div>
                    <p className='Home-Name'>CATIA</p>
                    <p className='Home-Detail'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                  </div>
                </li>)
              })}
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </ul>
          </li>)
        })}
      </ul>
    </div>
  )
}
