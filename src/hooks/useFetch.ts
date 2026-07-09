import { useState, useEffect } from "react";
export function useFetch(
  requestFunc: (query: string) => Promise<object[]>,
  query: string,
) {
  const [data, setData] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const allData = await requestFunc(query);
        setData(allData);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [requestFunc, query]);

  return { data, isLoading, error };
}