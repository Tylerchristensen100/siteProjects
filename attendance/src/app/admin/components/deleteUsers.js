"use client"
import { useState, useEffect } from 'react'


export default function DeleteUsers() {
  const [users, setUsers] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  function deleteUser(firstName, lastName) {
    const data = {
      message: 'delete user',
      user: {
        firstName,
        lastName
      }
    }
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    const row = document.getElementById(firstName + '_' + lastName)
    row.remove()

  }

  console.log(users)
  return (
    <>
      <table >
        <thead>
          <tr >
            <th >Name</th>
            <th>Gender</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ firstName, lastName }, index) => {
            return (
              <tr key={index} id={firstName + '_' + lastName}>
                <td >{firstName} {lastName}</td>
                <td>__</td>
                <td><button className="btn btn-danger" onClick={() => { deleteUser(firstName, lastName) }}>Delete</button></td>
              </tr>
            )
          })
          }

        </tbody>
      </table>
    </>
  )
}