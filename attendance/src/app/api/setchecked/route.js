import { NextResponse } from 'next/server'
import fs from 'fs'
import db from 'db.json' assert { type: "json" }

function save(data) {
  fs.writeFile('db.json', JSON.stringify(data), err => {
    if(err) {
      console.log(err)
    } else {
      console.log('Success')
    }
  })
}
export async function GET() {
  return NextResponse.json({ message: "Hello" })
}

export async function POST(req) {
  const data = await req.json()

  const firstName = data.firstName
  const lastName = data.lastName
  const date = data.date
  const isChecked = data.isChecked

  const i = db.findIndex(p => p.firstName == firstName && p.lastName == lastName)
  if(i == -1) {
    return NextResponse.json({ message: 'Error', error: 'Person not found' })
  } else {
    db[i].dates[date] = isChecked
    save(db)
  }
  
  return NextResponse.json({ message: 'Success' })
}