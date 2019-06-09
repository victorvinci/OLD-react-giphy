import React from 'react';

const Gif = (props) => {
  const src = `https://media2.giphy.com/media/${props.id}/200.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
};

export default Gif;
