import { NextResponse } from 'next/server'
import { getUsers, setUser, uploadUsers, deleteUser, updateUser } from 'src/app/api/users/index.js'


export async function GET() {
  return NextResponse.json(getUsers())
}

export async function POST(req) {
  const data = await req.json()
  if(data.message == 'new user') {
    const newUser = {
      firstName: data.user.firstName,
      lastName: data.user.lastName,
      dates: {}
    }
    setUser(newUser)
    return NextResponse.json({ message: 'Success' })

  } else if(data.message === 'update user') {
    updateUser(data.user)

    return NextResponse.json({ message: 'Success' })

  } else if(data.message === 'upload users') {
    uploadUsers(data.users)

    return NextResponse.json({ message: 'Success' })

  } else if (data.message === 'delete user') {
    console.log('delete user', data.user)
    deleteUser(data.user)
    return NextResponse.json({ message: 'Success' })
  } else {
    // NextResponse.error(new Error('Invalid argument'))
  }
}



