import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 


    await prisma.todo.deleteMany()

   const todos =  await prisma.todo.createMany({
      data: [{
            description: 'Piedra del alma',
            complete: true,
        },
        {description: 'Piedra del poder'},
        {description: 'Piedra del tiempo'},
        {description: 'Piedra del espacio'},
        {description: 'Piedra del realidad'},

        ],
    })

    console.log(todos)

  return  NextResponse.json({ message: 'seed Executed' })
}