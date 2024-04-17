"use server";

import prisma from "@/app/lib/prisma";
import { getUserSessionServer } from "@/auth/actions/auth-actions";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";



//export const sleep = async(seconds:number = 0) =>{
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve(true)
//        }, 1000 * seconds)
//    })
//}

export const toogleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
 

  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) throw new Error(`Todo con id ${id} no encontrado`);

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-actions");
  return updateTodo;
};

export const addTodo = async (description: string, userId: string) => {
    
  try {
    const todo = await prisma.todo.create({ data: { description, userId  } });
    revalidatePath("/dashboard/server-actions");
    return todo;
  } catch (error) {
    return {
        message: 'Error creando todo'
    }
  }
};


export const deleteTodosComplete = async () => {
  const todo = await prisma.todo.deleteMany({ where: { complete:true } });
  revalidatePath("/dashboard/server-actions");
  return todo;
}