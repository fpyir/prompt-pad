import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import localforage from "localforage";

export function useStorage<T>(
  key: string,
  defaultValue?: T
): {
  data: T | undefined;
  isLoading: boolean;
  isFetched: boolean;
  error: Error | null;
  setData: (data: T) => Promise<void>;
} {
  const storageKey = ["local", key];

  const queryClient = useQueryClient();
  const { data, isFetched, isLoading, error } = useQuery<
    T | null | undefined,
    Error
  >({
    queryKey: storageKey,
    queryFn: () => localforage.getItem<T>(storageKey.join("/")),
  });

  const { mutateAsync, mutate } = useMutation<T, Error, T>(
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
    data: data ?? defaultValue,
    isLoading,
    isFetched,
    error,
    setData,
  };
}
