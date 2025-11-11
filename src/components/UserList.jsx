import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

export default function UserList() {
  const { users, loading, removeUser } = useContext(UserContext)

  if (loading) return <div className="empty">Loading users...</div>

  return (
    <div>
      {users.map(u => (
        <div key={u.id} className="user-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="avatar">{u.name[0]}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{u.name}</div>
              <div className="muted">{u.email}</div>
            </div>
          </div>
          <button className="btn ghost" onClick={() => removeUser(u.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
