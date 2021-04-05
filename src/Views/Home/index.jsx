/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [response, setResponse] = useState(null); 
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'https://kmote.mx/devtest/';

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const json = await res.json();
            setIsLoading(false);
            if(isLoading) {
              <p>please wait, i'm loading your data :D </p>
            }
            setResponse(json);
        } catch {
            setError(error);
            if(error) {
              <p>Ohh no!, 3312,3312: We have a problem houston</p>
            }
        }
    };
    fetchData();
}, []);

console.log(response)

  return (
    <>
    holi home :D
    </>
  );
}

export default Home;
