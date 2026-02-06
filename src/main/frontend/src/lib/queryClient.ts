import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,                 // 실패 시 재시도 횟수
      staleTime: 1000 * 60 * 1, // 1분 동안 fresh 상태
      gcTime: 1000 * 60 * 5,    // 5분 후 캐시 제거
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
