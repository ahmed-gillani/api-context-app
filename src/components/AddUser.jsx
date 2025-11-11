import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'

export default function AddUser() {
  const { addUser } = useContext(UserContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (name && email) {
      addUser({ name, email })
      setName(''); setEmail('')
    }
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 12, margin: '1.5rem 0' }}>
      <input className="input" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button className="btn" type="submit">Add User</button>
    </form>
  )
}
