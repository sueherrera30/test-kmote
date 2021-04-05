import React from 'react';
import { Link } from 'react-router-dom';

import './styles/detail.css';

const Detail = (props) => {
    const { detailProps } = props.location; 
    const botImg = '../../../assets/bot.png';
return (
        <>
        <div className="title-container_detail">
            <h3 className="title">Hi earthling! this is {detailProps.optionName} talking... </h3>
            <div className="img-container">
                <img className="img-bot_detail" src={botImg} alt="bot" />
            </div>
        </div>
        <div className="data-container">
            <p className="subtitle"> who am I?, well...</p>
            <div className="detail-ccontainer">
            <div className="option-container">
                <span className="detail-kind">age:</span><span className="detail-data">{detailProps.age}</span>
            </div>
            <div className="option-container">
                <span className="detail-kind">experience:</span><span className="detail-data">{detailProps.experience}</span>
            </div>
            <div className="option-container">
                <span className="detail-kind">position:</span><span className="detail-data">{detailProps.position}</span>
            </div>
            <div className="option-container">
                <span className="detail-kind">my Id:</span><span className="detail-data">{detailProps.id}</span>
            </div> 
            </div>
            
        </div>
        <Link className="back" to="/"> ← BACK</Link>
    </>
);
}

export default Detail;
