import React, { useContext } from 'react'
import { UserContext } from './context/UserContext.jsx'
import AddUser from './components/AddUser.jsx'
import UserList from './components/UserList.jsx'

export default function App() {
  const { welcome } = useContext(UserContext)

  return (
    <div className="app">
      <header className="header">
        <h1>API Context App</h1>
        <p className="pk">Live from Pakistan • {new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
        <p className="welcome">{welcome}</p>
      </header>
      <div className="panel-row">
        <div className="card">
          <h2 style={{color:'#006400', marginBottom:'1rem'}}>Add New User</h2>
          <AddUser />
          <h2 style={{color:'#006400', margin:'2rem 0 1rem'}}>Users List</h2>
          <UserList />
        </div>
      </div>
    </div>
  )
}
