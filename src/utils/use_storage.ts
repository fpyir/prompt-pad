import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import localforage from "localforage";

export function useStorage<T>(key: string): {
  data: T | undefined;
  isLoading: boolean;
  error: Error | null;
  setData: (data: T) => Promise<void>;
} {
  const storageKey = ["local", key];

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<T | null | undefined, Error>({
    queryKey: storageKey,
    queryFn: () => localforage.getItem<T>(storageKey.join("/")),
  });

  const { mutateAsync } = useMutation<T, Error, T>(
    (newData) => localforage.setItem(storageKey.join("/"), newData),
    {
      onMutate: (data) => {
        queryClient.setQueryData(storageKey, data);
      },
    }
  );

  const setData = async (newData: T) => {
    await mutateAsync(newData);
  };

  return {
    data: data ?? undefined,
    isLoading,
    error,
    setData,
  };
}
