/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/home.css';

const Home = () => {
  const [response, seResponse] = useState(null); 
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = 'https://kmote.mx/devtest/';
  const botImg = '../../../assets/bot.png';
 
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

  return (
    <div className="main-container">
      <div className="title-container">
        <div className="img-container">
          <img className="img-bot" src={botImg} alt="bot" />
        </div>
        <div className="text">
          <h1 className="title">Hello there!</h1>
          <h3 className="subtitle">Please choose one or our available earthlings</h3>
        </div>
      </div>
        {
          !response || isLoading  ?
          <p>Hey, wait a minute I`m loading :D </p>
          : <div className="options-container">
            {
              response.data.map(option => (
                <div className="option-container">
                  <Link
                  className="option"
                  key={option._id}
                  to={{
                    pathname: `/detail/${option._id}`,
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
                  <div className="option-decoration" />
                  </Link>
                </div>
              ))
            }
          </div>
        }
    </div>
  );
}

export default Home;