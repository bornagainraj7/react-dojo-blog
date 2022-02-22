import { useEffect, useState } from "react";

const useFetchData = (url = 'http://localhost:8000/blogs') => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setError(error.message);
          setLoading(false);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}
 
export default useFetchData;