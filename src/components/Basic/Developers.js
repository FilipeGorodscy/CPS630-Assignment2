import React from "react";

const Developers = ({ src, name, github }) => {
  return (
    <div className="media">
      <img className="align-self-center mr-3 developers" src={src} alt={name} />
      <div className="media-body">
        <h5 className="mt-0">{name}</h5>
        <div className="mb-0">
          <a href={`https://${github}`}>{github}</a>
        </div>
      </div>
    </div>
  );
};

export default Developers;
