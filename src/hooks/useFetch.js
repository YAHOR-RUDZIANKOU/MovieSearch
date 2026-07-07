import { useState, useEffect } from "react";
export function useFetch(requestFunc,query) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const allData = await requestFunc(query);
        setData(allData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [requestFunc,query]);

  return { data, isLoading, error };
}