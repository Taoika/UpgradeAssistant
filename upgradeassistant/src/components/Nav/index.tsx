import React, { useEffect } from 'react'
import './index.scss'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
type Props = { data: Array<Array<string>> }
export default function Nav({ data }: Props) {

  return (
    <div className='Nav'>
      <div className='Nav-logo'><img src={logo} alt="" /></div>
      <div className='Nav-main'>
        <ul>
          {data?.map((v: Array<string>, i) => {
            return (<li key={i}>
              <Link to={`/${v[0]}`}>{v[1]}</Link>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}
