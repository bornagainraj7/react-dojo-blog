import { useEffect, useState } from "react";

const useFetchData = (url = 'http://localhost:8000/blogs') => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
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
        setError(error.message);
        setLoading(false);
      })
  }, [url]);

  return { data, loading, error };
}
 
export default useFetchData;