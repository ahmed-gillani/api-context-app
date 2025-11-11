import React, { createContext, useState, useEffect } from 'react'
import { getWelcome } from '../api/client.js'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [welcome, setWelcome] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(d => { setUsers(d); setLoading(false) })

    getWelcome()
      .then(r => setWelcome(r.data['Hi There']))
      .catch(() => setWelcome('Welcome to Connecx Guard'))
  }, [])

  const addUser = (u) => setUsers(p => [{ id: Date.now(), ...u }, ...p])
  const removeUser = (id) => setUsers(p => p.filter(x => x.id !== id))

  return (
    <UserContext.Provider value={{ users, loading, welcome, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  )
}
