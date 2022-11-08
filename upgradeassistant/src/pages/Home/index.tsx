import React from 'react'
import './index.scss'
import PostOrUpdate from '../PostOrUpdate'

export default function Home() {
  return (
    <div className='Home'>
      <div className='head'></div>
      <aside></aside>
      <PostOrUpdate/>
    </div>
  )
}
