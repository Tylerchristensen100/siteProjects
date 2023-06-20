import { NextResponse } from 'next/server'
import db from 'db.json' assert { type: "json" }

export async function GET() {
  console.log("GET")
  console.log(db)
  return NextResponse.json(db)
}
