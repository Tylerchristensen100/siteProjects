import fs from 'fs'
import db from 'db.json' assert { type: "json" }

export function getUsers() {
    return db
}

export function setUser(user) {
  let newDb = db
  newDb.push(user)
  save(newDb)
}

export function updateUser(user) {
  let newDb = db
  const index = newDb.findIndex(u => u.firstName === user.firstName && u.lastName === user.lastName)
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    dates: {...newDb[index].dates}
  }
    newDb[index] = newUser
    save(newDb)
}

export function uploadUsers(users) {
  let newDb = db
  users.forEach(user => {
    if(!user.firstName || !user.lastName) {
      return
    }
    const index = newDb.findIndex(u => u.firstName === user.firstName && u.lastName === user.lastName)
    if(index === -1) {
      newDb.push(user)
    } else {
      newDb[index] = user
    }
  })
  save(newDb)
}

export function deleteUser(user) {
  let newDb = db
  const index = newDb.findIndex(u => u.firstName === user.firstName && u.lastName === user.lastName)
  newDb.splice(index, 1)
  save(newDb)
}


function save(data) {
  fs.writeFile('db.json', JSON.stringify(data), err => {
    if(err) {
      console.log(err)
    } else {
      console.log('Success')
    }
  })
}