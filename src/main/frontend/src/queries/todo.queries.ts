import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, getTodos } from "@/api/todo.api";
import { queryKeys } from "@/queryKeys";

export function useTodos() {
  return useQuery({
    queryKey: queryKeys.todos.list(),
    queryFn: getTodos,
  });
}

export function useDeleteTodo() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.todos.all });
    },
  });
}
