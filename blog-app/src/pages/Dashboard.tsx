import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { WritePost } from '../components/WritePost'
import '../styles/dashboard.css'
export const Dashboard = () => {
  return (
    <div className='dashboard_container'>
      <Sidebar/>
      <WritePost/>
    </div>
  )
}