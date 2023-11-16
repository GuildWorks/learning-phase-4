import { NextResponse } from 'next/server'

import prisma from '../../../../../../lib/prisma'

// GET /api/pets/:id/weights
export async function GET(request: Request, { params }: { params: { id: string } }) {
  // get id from params
  const id = params.id
  // findUnique returns a single pet with owner data
  const pet = await prisma.pet.findUnique({
    // where id is equal to the id param
    where: { id: Number(id) },
    // include owner data
    include: { owner: true, weights: true },
  })
  // return Response with pets to json
  return NextResponse.json({ pet })
}

// POST /api/pets/:id/weights
export async function POST(request: Request, { params }: { params: { id: string } }) {
  // get id from params
  const id = params.id
  // get data from request body
  const data = await request.json()
  // create weight record
  const weight = await prisma.weight.create({
    // data from request body
    data: data.weight,
  })
  // return Response with weight to json
  return NextResponse.json({ weight })
}
