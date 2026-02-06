import { http } from "@/utils/axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodos(): Promise<Todo[]> {
  const res = await http.get<Todo[]>("/todos");
  return res.data;
}

export async function deleteTodo(id: number): Promise<void> {
  await http.delete(`/todos/${id}`);
}
