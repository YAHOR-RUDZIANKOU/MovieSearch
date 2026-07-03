import { useState, useEffect } from "react";
export function useFetch(requestFunc) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const allData = await requestFunc();
        setData(allData);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [requestFunc]);

  return { data, isLoading, error };
}