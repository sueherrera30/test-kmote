/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [response, seResponse] = useState(null); 
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
            seResponse(json);
        } catch {
            setError(error);
        }
    };
    fetchData();
}, []);

if(error) {
  <p>Ohh no!, 3312,3312: We have a problem houston</p>
}
console.log('data', response);

  return (
    <>
      <h1>Hello there! Please choose one or our available earthlings</h1>
      <div>
        {
          !response || isLoading  ?
          <p>Hey, wait a minute I`m loading :D </p>
          : response.data.map(option => (
            <Link
            key={option._id}
            to={{
              pathname: `/detail/${option.nombre}`,
              detailProps: {
                optionName: option.nombre,
                age: option.edad,
                experience: option.experiencia,
                position: option.puesto,
                id: option._id,
              }
            }}
            >
              {option.nombre}
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Home;