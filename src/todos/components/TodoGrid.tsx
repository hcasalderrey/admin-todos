"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "..";

import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}
export const TodoGrid = ({ todos = [] }: Props) => {

    const router = useRouter()
    const toogleTodo = async (id: string, complete: boolean) => {
        const updateTodo = await todosApi.updateTodo(id, complete);
        console.log({updateTodo})
        router.refresh();
        //return updateTodo;
    }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toogleTodo={toogleTodo} />
      ))}
    </div>
  );
};
