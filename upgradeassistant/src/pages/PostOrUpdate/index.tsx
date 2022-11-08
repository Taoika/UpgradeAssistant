import React from 'react'
import './index.scss'
import PostForm from '../../components/PostForm'

export default function PostOrUpdate() {

  return (
    <div className='PostOrUpdate'>
        <div className="center">
          <h2 className="title">发布软件</h2>
          <div className="content">
            <PostForm/>
          </div>
        </div>
    </div>
  )
}
