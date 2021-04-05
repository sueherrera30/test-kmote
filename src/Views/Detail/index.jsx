import React from 'react';

const Detail = (props) => {
    const { detailProps } = props.location; 
  return (
    <>
      <div>
          <p>{detailProps.optionName}</p>
          <p>{detailProps.age}</p>
          <p>{detailProps.experience}</p>
          <p>{detailProps.position}</p>
          <p>{detailProps.id}</p>
      </div>
    </>
  );
}

export default Detail;
